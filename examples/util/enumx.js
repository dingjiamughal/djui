/**
 * @file enumx.js
 * @author djmughal
 * @description enumx
 */

import _ from 'lodash';

const maps = new WeakMap();

class Enum {
    constructor(map) {
        if (!Array.isArray(map)) {
            throw new TypeError('Enum 必须为数组!');
        }
        const keys = map.map(([key, value]) => value.id);
        if (_.uniq(keys).length !== keys.length) {
            throw new TypeError('Enum id 必须是唯一的!');
        }
        maps.set(this, new Map(map));
    }

    getById(id) {
        for (let value of this.values()) {
            if (value.id === id) {
                return value;
            }
        }
    }

    getLabel(key) {
        if (this.has(key)) {
            return this.get(key).label;
        }
        return null;
    }

    getLabelById(id) {
        const item = this.getById(id);
        if (item) {
            return item.label;
        }
    }

    toArray(key = 'value') {
        return Array.from(maps.get(this)).map(([value, item]) => ({...item, [key]: value}));
    }

    get size() {
        return maps.get(this).size;
    }

    get(key) {
        return maps.get(this).get(key);
    }

    has(key) {
        return maps.get(this).has(key);
    }

    keys() {
        return maps.get(this).keys();
    }

    values() {
        return maps.get(this).values();
    }

    entries() {
        return maps.get(this).entries();
    }

    forEach(callback, thisValue) {
        return maps.get(this).forEach(callback, thisValue || this);
    }

    * [Symbol.iterator]() {
        for (let iterator of maps.get(this)) {
            yield iterator;
        }
    }

    get [Symbol.isConcatSpreadable]() {
        return maps.get(this)[Symbol.isConcatSpreadable];
    }
}

export default function enumx(arr) {
    let enums = new Enum(arr);
    arr.forEach(item => {
        enums[item[1].id] = item[0];
    });
    return enums;
}

