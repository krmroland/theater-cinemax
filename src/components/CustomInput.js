import React, { Component } from "react";

import { createArray } from "../utils";

export default class CustomInput extends Component {
    handleChange(e) {
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    }
    renderInput() {
        const type = this.props.type || "text";

        const attributes = {
            className: "input",
            onChange: this.handleChange.bind(this)
        };

        if (type === "select") {
            return this.renderSelect(attributes);
        }
        return <input type={type} {...attributes} />;
    }

    renderSelect(attributes) {
        return (
            <select {...attributes}>
                <option value="">Select ...</option>
                {this.generateOptions()}
            </select>
        );
    }
    generateOptions() {
        const data = this.props.options || [];

        if (Array.isArray(data)) {
            return data.map(this.makeOption);
        }

        // if we are dealing with an object, then the values will be the object
        // keys and what is displayed will be the object values
        if (data !== null && typeof data === "object") {
            return Object.keys(data).map(key =>
                this.makeOption(data[key], key, true)
            );
        }

        // if data is a number, then we will iterate from o to that number
        if (+data) {
            return createArray(data, this.makeOption);
        }
    }
    makeOption(value, key, useKeysAsValues = false) {
        return (
            <option key={key || value} value={useKeysAsValues ? key : value}>
                {value}
            </option>
        );
    }
    render() {
        const { label } = this.props;
        return (
            <div className="form-group">
                {label && <label>{label}</label>}
                {this.renderInput()}
            </div>
        );
    }
}
