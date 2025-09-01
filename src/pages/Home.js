import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <h1>Welcome to Little Lemon</h1>
                <p>Delicious Mediterranean flavors, freshly made every day.</p>
                <Link to="/booking" className="btn-primary">Reserve a Table</Link>
            </section>

            <section className="menu-preview">
                <h2>Popular Dishes</h2>
                <div className="menu-items">
                    <div className="menu-item">
                        <img src="/images/lemon-chicken.jpg" alt="Lemon Chicken" />
                        <h3>Grilled Lemon Chicken</h3>
                    </div>
                    <div className="menu-item">
                        <img src="/images/greek-salad.jpg" alt="Greek Salad" />
                        <h3>Greek Salad</h3>
                    </div>
                    <div className="menu-item">
                        <img src="/images/lemon-pasta.jpg" alt="Lemon Pasta" />
                        <h3>Lemon Pasta</h3>
                    </div>
                </div>
                <Link to="/menu" className="btn-secondary">View Full Menu</Link>
            </section>
        </main>
    );
}

export default Home;