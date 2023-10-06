import React from 'react'

import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

const App = () => { 
    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>Hola</h1>
            <h2>Count: {count}</h2>
            <button onClick={ () => setCount(count + 1) }>Increment</button>
            <h3>The END 🥕🐇</h3>
        </div>
    )
}

root.render(<App />);