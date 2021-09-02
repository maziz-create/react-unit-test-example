import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Counter from './index'

//burada Counter componentiyle ilgili UNIT test yazacağız.
//"test" ya da "it" => it should be .. ' den geliyor.
//testin ilk parametresine neyin test edildiğini yazmalıyız. kontrole tabi değil.

//artıran buton test edildi.
test('increase btn', () => {
    render(<Counter />);

    //domda içinde 0 ve increase yazan şeyleri aldık.
    const count = screen.getByText('0');
    const increaseBtn = screen.getByText('Increase');

    //bu butona tıklansın.
    userEvent.click(increaseBtn);

    //tıklandığında text içeriğinin 0'dan 1 olmasını bekliyoruz.
    expect(count).toHaveTextContent('1');
});

//azaltan buton test edildi.
test('decrease btn', () => {
    render(<Counter />);

    const count = screen.getByText('0');
    const decreaseBtn = screen.getByText('Decrease');

    userEvent.click(decreaseBtn);

    expect(count).toHaveTextContent("-1");

});

