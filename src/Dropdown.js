import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleTriggerClick = () => {
        const isOpen = this.state.isOpen
        this.setState({
            isOpen: !isOpen
        })
    }

    render() {
        const { isOpen } = this.state
        return (
            <div className="dropdown__wrapper" >
                {this.props.trigger({ onClick: this.handleTriggerClick })}
                {isOpen &&
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