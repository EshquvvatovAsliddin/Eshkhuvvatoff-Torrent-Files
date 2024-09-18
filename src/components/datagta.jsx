import { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Datas() {
    // Kodni saqlash uchun state yaratamiz
    const [code, setCode] = useState('');
    const [isCodeCorrect, setIsCodeCorrect] = useState(false);

    // To'g'ri kodni ta'riflaymiz (bu kodni serverda saqlash yaxshiroq bo'ladi, ammo oddiy holatda bu shunchaki misol)
    const correctCode = '20080905'; // Bu kodni o'zingiz xohlagancha sozlang

    // Formani submit qilishda tekshirish funksiyasi
    const handleSubmit = (e) => {
        e.preventDefault();
        if (code === correctCode) {
            setIsCodeCorrect(true);
        } else {
            alert('wrong password');
        }
    };

    return (
        <>
            <div className='h-[410px] grid items-center'>
                <form className="flex max-w-md flex-col gap-4">
                    <div className='w-screen flex justify-center'>
                        {!isCodeCorrect ? (
                            <div className='justify-center grid'>
                                <div>
                                    <TextInput value={code} onChange={(e) => setCode(e.target.value)} placeholder="********" />
                                </div>

                                <Button className='bg-[#111]' onClick={handleSubmit}>download ?</Button>
                            </div>
                        ) : (
                            <div className='w-screen flex justify-center'>
                                <div className='mx-auto'>
                                    <h2>password correct</h2>
                                    <a href="\src\assets\appdata\GTA V.rar" download>Download Data</a>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Datas;
