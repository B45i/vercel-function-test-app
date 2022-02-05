const Quote = () => {
    return (
        <div className="quotes-container">
            <div className="quote">
                {/* <img
                    className="quote-image"
                    src="https://picsum.photos/1080/1920"
                ></img> */}
                <div className="quote-text">Hello</div>
            </div>
            <div className="actions">
                <button className="btn btn-blue">Download</button>
                <button className="btn btn-orange">Next</button>
            </div>
        </div>
    );
};

export default Quote;
