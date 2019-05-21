import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpan: false
        }
    }

    handleTriggerClick = () => {
        const isOpan = this.state.isOpan
        this.setState({
            isOpan: !isOpan
        })
    }

    render() {
        const { isOpan } = this.state
        return (
            <div className="dropdown__wrapper" >
                {this.props.trigger({ onClick: this.handleTriggerClick })}
                {isOpan &&
                    < div className="dropdown" >
                        {
                            this.props.items.map((item) => (
                                <div>
                                    <item.icon className="dropdown__icon" />
                                    <span>{item.text}</span>
                                </div>
                            ))
                        }
                    </div>
                }
            </div >
        )
    }
}

export { Dropdown }