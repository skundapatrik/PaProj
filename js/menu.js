const app = (() => {
    let body;
    let menu;
    let menuItems;
    let dropdownMenus;
    let dropdownItems;
    // let nav;
  
    const init = () => {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-icon');
      menuItems = document.querySelectorAll('.nav__list-item');
      dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownItems = document.querySelectorAll('.dropdown-item');
      
      dropdownMenus.forEach(removeStyleBorder);
      dropdownItems.forEach(removeStylePaddingWidth);
    //   nav = document.querySelector('#nav');
  
      applyListeners();
    };


    const removeStyleBorder = (element) => {
        element.style.border = "none";
        element.style.minWidth = "0px";
    };
    const removeStylePaddingWidth = (element) => {
        element.style.padding = "0";
        element.style.minWidth = "0px";
    };
  
    const applyListeners = () => {
    //   menu.addEventListener('click', () => toggleClass(nav, 'nav-none-display'));
      menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    };
  
    const toggleClass = (element, stringClass) => {
      if (element.classList.contains(stringClass))
      element.classList.remove(stringClass);
      else
      element.classList.add(stringClass);
    };
  
    init();
  })();