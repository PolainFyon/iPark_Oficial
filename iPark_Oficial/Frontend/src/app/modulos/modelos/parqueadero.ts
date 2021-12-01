export class Parqueadero {
    Pointer(): void {

        let reserve: any = document.getElementsByName('Reservar')[0];
        reserve.disabled = false;
        let button: any = document.getElementsByName('Cancel')[0];
        button.disabled = true;
        var div: any = document.getElementsByName('bar')[0];
        div.style.display = 'none';
        let tags: any = document.getElementsByTagName('rect');
        let arr = [];
        for (let tag of tags) {
            if (tag.style.fill == 'rgb(236, 236, 236)') {
                arr.push(tag)
            }
        }
        let arrLength: number = arr.length
        let i: number = 16
        for (let tag of tags) {

            if (tag.style.fill == 'rgb(236, 236, 236)') {
                let j: number = arrLength - i;
                let text = document.createElement('text');
                text.setAttribute('font-size', 'Verdana');
                text.setAttribute('font-size', '55');
                text.setAttribute('x', '100');
                text.setAttribute('y', '200');
                text.textContent = j.toString();
                tag.setAttribute('name', j.toString());
                tag.setAttribute('cursor', 'pointer');
                let name = tag.getAttribute('name');
                let color = tag.style.fill;
                let e: any = [];
                e.push(name);
                e.push(color);
                tag.addEventListener('click', function () {
                    let name = tag.getAttribute('name');
                    let color = tag.style.fill;
                    let e: any = [];
                    e.push(name);
                    e.push(color);
                    for (let x of tags) {
                        if (x.style.fill == 'red') {
                            if (tag.style.fill !== 'red') {
                                let button: any = document.getElementsByName('Cancel')[0];
                                button.disabled = true;
                            } else {
                                let button: any = document.getElementsByName('Cancel')[0];
                                button.disabled = false;
                            }
                        }
                    }
                    /*if(tag.style.fill == 'rgb(236, 236, 236)'){
                        let reserve:any = document.getElementsByName('Reservar')[0];
                        reserve.disabled = false;
                        let button:any = document.getElementsByName('Cancel')[0];
                        button.disabled = true;
                    }else{                    
                        let reserve:any = document.getElementsByName('Reservar')[0];
                        reserve.disabled = true;
                        let button:any = document.getElementsByName('Cancel')[0];
                        button.disabled = false;
                    }*/
                    var div: any = document.getElementsByName('bar')[0];
                    div.style.display = 'none';
                    var _tags: any = document.getElementsByClassName('nav-link');
                    let siteNumber = _tags[0];
                    siteNumber.textContent = name;

                    let status = _tags[1];
                    if (siteNumber.textContent == '6' || siteNumber.textContent == '10' || siteNumber.textContent == '7' || siteNumber.textContent == '8' || siteNumber.textContent == '9') {
                        status.textContent = 'Moto';
                    } else {
                        status.textContent = 'Carro';
                    }

                    let type = _tags[2];
                    if (color == 'rgb(236, 236, 236)') {
                        type.textContent = 'Disponible';
                    } else {
                        type.textContent = 'Reservado';
                    }

                    if (div.style.display !== "none") {
                        div.style.display = "blcok";
                    } else {
                        div.style.display = "block";
                    }
                }, false);
                tag.addEventListener('dblclick', function () { div.style.display = "none" }, false);
                i = i - 1;
            }
        }
    }
}
