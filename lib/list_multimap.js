// subclass Map built-in class 
// to give equivalent of Guava's ArrayListMultimap or Map<K, List<V>>:

class ListMultimap extends Map {
    set(key, value) {
        if (this.has(key)) {
            const currentValues = this.get(key);
            super.set(key, [...currentValues, value]);
        } else {
            super.set(key, [value]);
        }

        return this;
    }

    get count() {
        return [...this.values()].reduce((sum, value) => sum += value.length, 0);
    }

    toJSON() {
        return [...this.keys()].reduce((acc, key) => {
            acc[key] = this.get(key);
            return acc;
        }, {});
    }

    get [Symbol.toStringTag]() {
        return 'ListMultimap';
    }
}

module.exports = ListMultimap;
