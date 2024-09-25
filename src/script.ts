interface Register {
    name: string;
    age: number;
    money: number;
}

class Registration {
    private registerList: Register[] = [];

    constructor() {
        document.getElementById('registrasiForm')?.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleSubmit();
        });
    }

    private async handleSubmit() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const age = parseInt((document.getElementById('age') as HTMLInputElement).value);
        const money = parseInt((document.getElementById('money') as HTMLInputElement).value);
        const newRegister: Register = { name, age, money };
        this.registerList.push(newRegister);
        this.updateTable();
        (document.getElementById('registrasiForm') as HTMLFormElement).reset();
    }

    private updateTable() {
        const tableBody = document.getElementById('registerTable') as HTMLTableSectionElement;
        tableBody.innerHTML = '';

        this.registerList.forEach((pendaftar) => {
            const row = `<tr>
                      <td>${pendaftar.name}</td>
                      <td>${pendaftar.age}</td>
                      <td>${pendaftar.money}</td>
                    </tr>`;
            tableBody.insertAdjacentHTML('beforeend', row);
        });

        this.updateResume();
    }

    private updateResume() {
        const totalRegister = this.registerList.length;
        if (totalRegister > 0) {
            const totalage = this.registerList.reduce((acc, pendaftar) => acc + pendaftar.age, 0);
            const totalmoney = this.registerList.reduce((acc, pendaftar) => acc + pendaftar.money, 0);

            const medage = totalage / totalRegister;
            const medmoney = totalmoney / totalRegister;

            const resume = `Rata-rata pendaftar memiliki uang sangu sebesar Rp.${medmoney.toLocaleString()} dengan rata-rata umur ${medage.toFixed(1)} tahun.`;
            document.getElementById('resume')!.innerText = resume;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const registrationTab = document.getElementById('registration-tab')!;
    const registerListTab = document.getElementById('register-list-tab')!;
    const registrationPanel = document.getElementById('registration')!;
    const registerListPanel = document.getElementById('register-list')!;

    registrationTab.addEventListener('click', () => {
        registrationPanel.classList.add('active');
        registerListPanel.classList.remove('active');
        registrationTab.classList.add('active');
        registerListTab.classList.remove('active');
    });

    registerListTab.addEventListener('click', () => {
        registerListPanel.classList.add('active');
        registrationPanel.classList.remove('active');
        registerListTab.classList.add('active');
        registrationTab.classList.remove('active');
    });

    new Registration();
});

