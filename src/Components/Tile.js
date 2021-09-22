import React from 'react';

function Tile({emoji, title}) {

    const [counter, setCounter] = React.useState(0);

    return (
        <section className="tile">
            <div>{emoji}</div>
            <h2>{title}</h2>
            <button type="button"
                    onClick={() => counter > 0 ? setCounter(counter - 1) : counter}
            >
                -
            </button>
            {counter}
            <button type="button"
                    onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </section>

    )
}

export default Tile;