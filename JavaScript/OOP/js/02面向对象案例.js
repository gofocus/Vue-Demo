let _this;

class Tab {
    constructor() {
        this.main = document.querySelector('ul');
        this.lis = document.querySelectorAll('li');
        this.section = document.querySelector('.tabscon');
        this.tabadd = document.querySelector('.tabadd');
        this.sections = document.querySelectorAll('section');
        _this = this;
        this.init();
    }

    init() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;

            // toggleTab不能加(),否则会直接调用
            // this.lis[i].onclick = this.toggleTab();
            this.lis[i].onclick = this.toggleTab;
            /*
                            // TODO 如果要传参怎么办？
                            // 思路1（待确认）
                            this.lis[i].onclick = function () {
                                _this.toggleTab(i);
                            }
            */
        }

        // +号按钮绑定点击事件添加tab
        this.tabadd.addEventListener('click', this.addTab);
        // this.tabadd.onclick = this.addTab;

    }

    toggleTab(i) {
        _this.clearClass();
        this.className = 'liactive';
        _this.sections[this.index].className = 'conactive';
        // _this.lis[i].className = 'liactive';
        // _this.sections[i].className = 'conactive';
    }


    addTab() {
        // 方法体内的this要换成_this,因为函数调用者始终是HTMLElement对象

        //插入li(tab)
        /*     let newTab = '<li><span>newTab</span><span class="iconfont icon-guanbi"></span></li>';
             _this.main.insertAdjacentHTML('beforeend', newTab);*/
        // 用insertAdjacentHTML不能赋值
        let newTab = document.createElement('li');
        newTab.innerHTML = `<span>newTab</span><span class="iconfont icon-guanbi"></span>`;
        newTab.index = _this.lis.length;
        // _this.main.appendChild(newTab);  // 用insertAdjacentElement可以灵活的选择插入位置
        _this.main.insertAdjacentElement('beforeend', newTab);
        _this.lis = document.querySelectorAll('li');
        newTab.addEventListener('click', _this.toggleTab);

        //插入section
        let newSection = document.createElement('section');
        newSection.innerHTML = 'New Tab content' + Math.random();
        // _this.section.appendChild(newSection);
        _this.section.insertAdjacentElement('beforeend', newSection);
        _this.sections = document.querySelectorAll('section');

        newTab.click()  //手动调用toggleTab，将新创建的tab设置为当前选中的tab
    }

    removeTab() {

    }

    editTab() {

    }

    clearClass() {
        for (let j = 0; j < this.lis.length; j++) {
            this.lis[j].className = '';
            this.sections[j].className = '';
        }
    }

}

let tab = new Tab();

