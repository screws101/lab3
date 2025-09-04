import imgMan from'../assets/headshot-man.jpg'

const Card1 = () => {
    return (<div className="card">
        <img src ={imgMan} alt="Headshot of a man" />
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
    </div>)
}

export default Card1;