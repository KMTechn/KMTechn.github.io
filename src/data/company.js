export const customerPartners = [
  {
    name: 'Hyundai Motor',
    logo: '/logos/Hyundai_Motor_Company_logo.svg.png',
    industryKey: 'partners_industry_automotive',
    scopes: ['partners_scope_storage', 'partners_scope_outbound'],
  },
  {
    name: 'Kia',
    logo: '/logos/KIA_logo3.svg.png',
    industryKey: 'partners_industry_automotive',
    scopes: ['partners_scope_storage', 'partners_scope_outbound'],
  },
  {
    name: 'Continental',
    logo: '/logos/continental_new.png',
    industryKey: 'partners_industry_automotive',
    scopes: ['partners_scope_inspection', 'partners_scope_rework'],
    needsBg: true,
  },
  {
    name: 'Kanavi Mobility',
    logo: '/logos/kanavi_new.png',
    industryKey: 'partners_industry_automotive',
    scopes: ['partners_scope_inspection', 'partners_scope_qr'],
  },
  {
    name: 'LG Display',
    logo: '/logos/lg_display_new.png',
    industryKey: 'partners_industry_electronics',
    scopes: ['partners_scope_storage', 'partners_scope_inspection'],
  },
  {
    name: 'LG Electronics',
    logo: '/logos/lg_electronics_new.png',
    industryKey: 'partners_industry_electronics',
    scopes: ['partners_scope_packaging', 'partners_scope_outbound'],
  },
  {
    name: 'Humax',
    logo: '/logos/humax_new.png',
    industryKey: 'partners_industry_electronics',
    scopes: ['partners_scope_packaging', 'partners_scope_qr'],
    needsBg: true,
  },
];

export const facilityMetrics = [
  { value: '2,140㎡', labelKey: 'stats_warehouse_space', detailKey: 'metric_space_detail' },
  { value: '3,000+', labelKey: 'stats_pallet_capacity', detailKey: 'metric_capacity_detail' },
  { value: '40ft x2', labelKey: 'metric_container_dock', detailKey: 'metric_dock_detail' },
  { value: '16CH', labelKey: 'metric_cctv', detailKey: 'metric_cctv_detail' },
];

export const operationHighlights = [
  { value: '3,000 Class', labelKey: 'metric_clean_booth', detailKey: 'metric_clean_booth_detail' },
  { value: 'ERP QR', labelKey: 'metric_qr_system', detailKey: 'metric_qr_detail' },
  { value: '50 Pallet', labelKey: 'metric_rework_capacity', detailKey: 'metric_rework_detail' },
];
