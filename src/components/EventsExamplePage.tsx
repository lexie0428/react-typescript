import React, { FC, useState, useRef } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState('')
    const [isDrag, setIsDrag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} placeholder='Управляемый'/>
            <input ref={inputRef} placeholder='Неуправляемый'/>
            <button onClick={clickHandler}>Кнопка</button>
            <div onDrag={dragHandler} draggable style={{ width: '100px', height: '100px', background: 'red', marginBottom: '10px' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: '100px',
                    height: '100px',
                    background: isDrag ? 'blue' : 'red'
                }}>
            </div>
        </div>
    )
}

export default EventsExample
