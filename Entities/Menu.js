class Menu {
    constructor() {
        this.menuItems = TUNABLE_VARIABLES.variableNames;
        this.createParent();
        document.body.append(this.parent);
        this.loadHUD();
    }

    createParent() {
        this.parent = document.createElement('div');
        this.parent.style.position = 'absolute';
        this.parent.style.width = 500;
        this.parent.style.height = window.innerHeight;
        this.parent.style.fontSize = 100;
        this.parent.style.top = 30 + 'px';
        this.parent.style.left = window.innerWidth / 2 - 250 + 'px';
        this.parent.style.background = 'rgba(122,122,122,.3)'
        this.parent.id = 'menuParent';
    }

    loadHUD() {
        this.elements = [];
        this.elements = this.menuItems.map((name, i) => {
            this.parent.append(this.loadElement(name, i));
        });
        let btn = document.createElement("button");
        btn.innerHTML = "Set Variables";
        btn.style.position = 'absolute';
        btn.style.top = (0 + (this.menuItems.length*50)) + 'px';
        btn.onclick = this.setTuningVariables;
        document.body.appendChild(btn);
        this.parent.append (btn);
    }

    setTuningVariables() {
        HTML_INPUT_FIELDS.map((id) => {
            const element = document.getElementById(id);
            TUNABLE_VARIABLES.set[id](element.value);
        })
    }

    loadElement(name, i) {
        const html = document.createElement('div');
        html.style.position = 'absolute';
        html.style.top = (0 + (i*45)) + 'px';
        html.style.left = 30 + 'px';
        html.style.width = 1000;
        html.style.height = 100;
        html.style.cursor = 'pointer';
        html.style.color = 'red';
        html.innerHTML = name;
        html.style.fontSize = 30;
        const input = document.createElement('input');
        input.setAttribute("type", "text");
        input.text = '';
        input.id = name;
        input.placeholder = TUNABLE_VARIABLES[name];
        input.style.marginLeft = '20px';
        HTML_INPUT_FIELDS.push(name);
        html.append(input);
        html.addEventListener('mouseover',this.highlight);
        html.addEventListener('mouseleave',this.exit);
        return html;
    }

    loadNameChange() {
    }

    show() {
        console.log('showing');
        menuOpened = true;
        this.parent.style.display = 'block';
    }

    hide() {
        console.log('hiding');
        menuOpened = false;
        this.parent.style.display = 'none';
    }

    highlight(e) {
        e.target.style.color = "purple";
    }

    exit(e) {
        e.target.style.color = "red";
    }
}
