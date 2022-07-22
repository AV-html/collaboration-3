import React from 'react';

type PropsType = {
    tasks: any
}

export function Todolist(props: PropsType) {


    return (
        <div>
            {props.tasks.map((t: any) => {
                return <div>
                    <span>{t.title}</span>
                    <input type="checkbox" checked={t.isDone}/>
                </div>
            })}
        </div>
    );
}