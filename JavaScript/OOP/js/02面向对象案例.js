let _this;

class Tab {
    constructor() {
        this.main = document.querySelector('ul');
        this.section = document.querySelector('.tabscon');
        this.tabadd = document.querySelector('.tabadd');
        _this = this;
        this.init();
    }

    init() {
        this.lis = document.querySelectorAll('li');
        this.sections = document.querySelectorAll('section');
        this.icons = document.querySelectorAll('.icon-guanbi');
        this.spans = document.querySelectorAll('li span:first-child');

        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            // ×图标绑定删除事件
            this.icons[i].onclick = this.removeTab;
            // 双击tab或section可以编辑内容
            this.lis[i].onselectstart = function (e) {
                e.preventDefault();
            };
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab


        }


        // +号按钮绑定点击事件添加tab
        this.tabadd.onclick = this.addTab;


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
        newTab.innerHTML = `<span>newTab${_this.lis.length + 1}</span><span class="iconfont icon-guanbi"></span>`;
        newTab.index = _this.lis.length;
        _this.main.insertAdjacentElement('beforeend', newTab);
        // newTab.addEventListener('click', _this.toggleTab);   // 要初始化的东西可能有多个，调用init函数来初始化

        //插入section
        let newSection = document.createElement('section');
        newSection.innerHTML = 'New Tab' + (_this.lis.length + 1);
        _this.section.insertAdjacentElement('beforeend', newSection);

        _this.init();
        newTab.click()  //手动调用toggleTab，将新创建的tab设置为当前选中的tab
    }

    removeTab(e) {
        e.stopPropagation();
        let index = this.parentNode.index;
        // _this.main.removeChild(_this.lis[index]);
        _this.lis[index].remove();  // 实验API
        _this.sections[index].remove();
        _this.init();
        if (document.querySelector('.liactive')) {
            return;     // 删除active选项卡，才需要设置样式
        }
        index = index === 0 ? 0 : --index;
        _this.lis[index] && _this.lis[index].click(); // 设置样式为liactive
    }

    editTab() {
        let _this = this;   // 调用对象是span或者section
        let content = this.innerText;
        this.innerHTML = `<input type="text" value="${content}">`;
        let contentInput = this.firstElementChild;
        contentInput.select();
        contentInput.onkeyup = function (e) {
            if (e && e.keyCode === 13) {
                this.blur();    // 按enter业务逻辑和blur一样，触发blur即可，不用再写一遍业务逻辑
            }
        };
        contentInput.onblur = function () {
            _this.innerHTML = contentInput.value;
        };
    }

    clearClass() {
        for (let j = 0; j < this.lis.length; j++) {
            this.lis[j].className = '';
            this.sections[j].className = '';
        }
    }

}

let tab = new Tab();

