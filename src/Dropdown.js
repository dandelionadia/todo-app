import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleTriggerClick = this.handleTriggerClick.bind(this);

        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleTriggerClick = () => {
        // const isOpen = this.state.isOpen
        // this.setState({
        //     isOpen: !isOpen
        // })
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))

        if (!this.state.isOpen) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }

    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleTriggerClick();
    }

    render() {
        const { isOpen } = this.state
        return (
            <div className="dropdown__wrapper" ref={node => { this.node = node; }} >
                {this.props.trigger({ onClick: this.handleTriggerClick })}
                {isOpen &&
                    < div className="dropdown" >
                        {
                            this.props.items.map((item, index) => (
                                <div key={index} className="box-menu" onClick={item.onClick}>
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