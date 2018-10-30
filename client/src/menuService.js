const menuService= [
    { id: 1,
      label: 'ארגונים',
      icon: 'fas fa-battery-half',
      items: [
        { id: 'organizations',
          label: 'ארגונים',
          icon: 'fas fa-car',
          link: '/organizations',
        },
        { id: '/organizations/create',
          label: 'חדש',
          icon: 'fas fa-car',
          link: '/organizations/create',
        }
      ],
    },
    { id: 2,
      label: 'לקוחות',
      icon: 'fas fa-battery-half',
      items: [
        { id: 21,
          label: 'לקוחות',
          icon: 'fas fa-car',
          link: '/customers/',
        },{ id: 22,
          label: 'חדש',
          icon: 'fas fa-car',
          link: '/customers/create',
        }
      ],
    },
  ];

  export default menuService;
  