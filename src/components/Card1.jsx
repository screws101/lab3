import imgMan from'../assets/headshot-man.jpg'

const Card1 = () => {
    return (
        <div className="card">
        <img
            src ={imgMan}
            alt="Headshot of a man"
            style={{ width: "100px", height: "auto", borderRadius: "8px" }}
        />
        <h2>Card Title</h2>
        <p>Card content goes here.</p>
        </div>
    )
}

export default Card1;