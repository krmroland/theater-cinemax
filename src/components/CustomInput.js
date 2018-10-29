import React, { Component } from 'react';

export default class CustomInput extends Component {
    handleChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    }
    render() {
        return (
            <div>
                {this.props.label && <label>{this.props.label}</label>}
                <input
                    type={this.props.type || 'text'}
                    className="input"
                    onChange={this.handleChange.bind(this)}
                />
                {this.props.error && (
                    <div class="input-error">{this.props.error}</div>
                )}
            </div>
        );
    }
}
