import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './index'

//burada Counter componentiyle ilgili UNIT test yazacağız.
//"test" ya da "it" => it should be .. ' den geliyor.
//testin ilk parametresine neyin test edildiğini yazmalıyız. kontrole tabi değil.

//REFACTORING
//burada aynı teste dair rutin işleri yapabiliriz.
describe('Counter Tests', () => {
    let count, increaseBtn, decreaseBtn;

    //her bir testten önce bunları yap.
    beforeEach(() => {
        render(<Counter />);
        //domda içinde 0 ve increase yazan şeyleri aldık.
        count = screen.getByText('0');
        increaseBtn = screen.getByText('Increase');
        decreaseBtn = screen.getByText('Decrease');
    })

    //artıran buton test edildi.
    test('increase btn', () => {
        //bu butona tıklansın.
        userEvent.click(increaseBtn);
        //tıklandığında text içeriğinin 0'dan 1 olmasını bekliyoruz.
        expect(count).toHaveTextContent('1');
    });

    //azaltan buton test edildi.
    test('decrease btn', () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");

    });

});


