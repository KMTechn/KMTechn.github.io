import { FaCogs, FaSearchPlus, FaSitemap, FaShippingFast, FaUsers } from 'react-icons/fa';

export const OrgDepartments = ({ t }) => (
  <div style={{paddingTop: '2rem', position: 'relative', margin: 0}}>
    <div style={{display: 'inline-block', textAlign: 'center', padding: '2rem 1rem', position: 'relative'}}>
      <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', minWidth: '250px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{fontSize: '1.5rem', color: 'var(--accent-amber)'}}><FaCogs /></div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, margin: 0, flexGrow: 1, textAlign: 'left'}}>{t('org_marketing_engineering_title')}</h4>
        </div>
      </div>
    </div>
    <div style={{display: 'inline-block', textAlign: 'center', padding: '2rem 1rem', position: 'relative'}}>
      <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', minWidth: '250px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{fontSize: '1.5rem', color: 'var(--accent-amber)'}}><FaSearchPlus /></div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, margin: 0, flexGrow: 1, textAlign: 'left'}}>{t('org_qc_technical_title')}</h4>
        </div>
      </div>
    </div>
    <div style={{display: 'inline-block', textAlign: 'center', padding: '2rem 1rem', position: 'relative'}}>
      <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', minWidth: '250px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{fontSize: '1.5rem', color: 'var(--accent-amber)'}}><FaSitemap /></div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, margin: 0, flexGrow: 1, textAlign: 'left'}}>{t('org_product_control_title')}</h4>
        </div>
      </div>
    </div>
    <div style={{display: 'inline-block', textAlign: 'center', padding: '2rem 1rem', position: 'relative'}}>
      <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', minWidth: '250px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{fontSize: '1.5rem', color: 'var(--accent-amber)'}}><FaShippingFast /></div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, margin: 0, flexGrow: 1, textAlign: 'left'}}>{t('org_3pl_title')}</h4>
        </div>
      </div>
    </div>
    <div style={{display: 'inline-block', textAlign: 'center', padding: '2rem 1rem', position: 'relative'}}>
      <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.25rem', minWidth: '250px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <div style={{fontSize: '1.5rem', color: 'var(--accent-amber)'}}><FaUsers /></div>
          <h4 style={{fontSize: '1.1rem', fontWeight: 600, margin: 0, flexGrow: 1, textAlign: 'left'}}>{t('org_management_title')}</h4>
        </div>
      </div>
    </div>
  </div>
);
