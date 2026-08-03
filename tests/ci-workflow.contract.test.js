import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const workflowPath = resolve(process.cwd(), '.github/workflows/ci.yml');
const workflow = readFileSync(workflowPath, 'utf8');

describe('Full CI docs drift classification contract', () => {
  it('queries accumulated successful main-push runs with read-only permissions', () => {
    expect(workflow).toMatch(
      /permissions:\s*\n\s+contents: read\s*\n\s+actions: read/,
    );
    expect(workflow).toContain('GH_TOKEN: ${{ github.token }}');
    expect(workflow).toContain('gh api --method GET');
    expect(workflow).toContain(
      '"/repos/${GITHUB_REPOSITORY}/actions/workflows/ci.yml/runs"',
    );
    expect(workflow).toContain('-f branch=main');
    expect(workflow).toContain('-f event=push');
    expect(workflow).toContain('-f status=success');
    expect(workflow).toContain('-F per_page="${per_page}"');
    expect(workflow).toContain('-F page="${page}"');
    expect(workflow).toContain('((page += 1))');
    expect(workflow).not.toContain('github.event.before');
    expect(workflow).not.toContain('BEFORE_SHA');
  });

  it('uses the newest successful ancestor and fails closed without one', () => {
    expect(workflow).toContain('docs_drift=true');
    expect(workflow).toContain('baseline_sha=""');
    expect(workflow).toContain('.name == "Full CI"');
    expect(workflow).toContain('.head_branch == "main"');
    expect(workflow).toContain('.conclusion == "success"');
    expect(workflow).toContain(
      'git merge-base --is-ancestor "${candidate_sha}" "${GITHUB_SHA}"',
    );
    expect(workflow).toContain(
      'git diff --name-only "${baseline_sha}" "${GITHUB_SHA}"',
    );

    const openBaselineGuard = workflow.indexOf(
      'if [[ -z "${baseline_sha}" ]]; then',
    );
    const openDiff = workflow.indexOf(
      'git diff --name-only "${baseline_sha}" "${GITHUB_SHA}"',
    );
    const relaxDrift = workflow.indexOf('docs_drift=false');

    expect(openBaselineGuard).toBeGreaterThan(-1);
    expect(openDiff).toBeGreaterThan(openBaselineGuard);
    expect(relaxDrift).toBeGreaterThan(openDiff);
  });

  it('keeps the classifier output producer and drift-check consumer connected', () => {
    expect(workflow).toContain('id: scope');
    expect(workflow).toContain(
      'echo "docs_drift=${docs_drift}" >> "${GITHUB_OUTPUT}"',
    );
    expect(workflow).toContain(
      "if: steps.scope.outputs.docs_drift == 'true'",
    );
  });
});
