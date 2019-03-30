import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <header className="bg-green-dark">Header</header>
                    <div className="arrow bg-red-dark">
                        <p>Left Bar</p>
                    </div>
                <main>
                    <div className="image bg-indigo-dark">
                        <p>Body Area</p>
                    </div>
                </main>
                <div className="arrow bg-red-dark">
                    <p>Right Bar</p>
                </div>
                <footer className="bg-yellow-dark">Footer</footer>
            </div>
        )
    }
}

export default App