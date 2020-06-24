import React from "react";

class Form extends React.Component {
    render () {
        return (
            <div>
                <form on onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="county" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

export default Form;