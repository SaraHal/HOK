const menuService= [
    { id: 'organizations',
      label: 'ארגונים',
      icon: 'fas fa-battery-half',
      link: '/organizations',
      items: [
        { id: 'organizations/create',
          label: 'חדש',
          icon: 'fas fa-car',
          link: '/organizations/create',
        }
      ],
    },
    { id: 'customers',
      label: 'לקוחות',
      icon: 'fas fa-battery-half',
      link: '/customers/',
      items: [
        { 
          id: 'customers/create',
          label: 'חדש',
          icon: 'fas fa-car',
          link: '/customers/create',
        }
      ],
    },
  ];

  export default menuService;
  