// subclass Map built-in class
// to give equivalent of Guava's SetMultimap or Map<K, Set<V>>:

class SetMultimap extends Map {
    set(key, value) {
        if (this.has(key)) {
            const set = this.get(key);
            set.add(value);
            super.set(key, set);
        } else {
            const set = new Set;
            set.add(value);
            super.set(key, set);
        }

        return this;
    }

    get count() {
        return [...this.values()].reduce((sum, set) => sum += set.size, 0);
    }

    toJSON() {
        const serializeMembers = (set) => {
            return [...set.values()].reduce((acc, value) => {
                acc.push(value);
                return acc;
            }, []);
        };

        return [...this.keys()].reduce((acc, key) => {
            const set = this.get(key);
            acc[key] = serializeMembers(set);
            return acc;
        }, {});
    }

    get [Symbol.toStringTag]() {
        return 'SetMultimap';
    }
}

module.exports = SetMultimap;
