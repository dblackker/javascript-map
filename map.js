var Map = function() { this.keys = []; this.items = new Object() }

// PUT
Map.prototype.put = function(key, value) { if (!(key in this.items)) { this.keys.push(key) } this.items[key] = value; }
Map.prototype.putAll = function(obj) { for(item in obj) { this.put(item, obj[item]) } }
// GET
Map.prototype.get = function(key) { return this.items[key] }
Map.prototype.getItems = function() { return this.items }
Map.prototype.getKeys = function() { return this.keys }
// OTHER
Map.prototype.size = function() { return this.keys.length }
Map.prototype.isEmpty = function() { return (this.keys.length == 0) }
Map.prototype.containsKey = function(key) { return (this.items[key] !== undefined) }
Map.prototype.clear = function() { this.keys = []; this.items = new Object() }

// CLONE POLYFILL
Object.prototype.clone = function() {
    var newObj = (this instanceof Array) ? [] : {};
    for (var i in this) {
        if (i == 'clone') continue;
        if (this[i] && typeof this[i] == "object") { newObj[i] = this[i].clone(); } else { newObj[i] = this[i]; }
    }
    return newObj;
}

var myMap = new Map()

myMap.put("firstItem", true)
myMap.put("secondItem", "doesn't matter")
myMap.put("firstItem", "hello world!")
myMap.putAll({"thirdItem": 1, "forthItem": 92.123})

var items = myMap.getItems()
var item = myMap.get("firstItem")
var contains = myMap.containsKey("firstItem")
var keys = myMap.getKeys()
var size = myMap.size()
var copy = myMap.clone()
copy.put("firstItem", false)
var clone = copy.getItems()
var cloneKeys = copy.getKeys()

var clear = myMap.clear()
var shouldBeZero = myMap.size()

console.log(items)          // { "firstItem" : true, "secondItem": "doesn't matter" }
console.log(item)           // "hello world!"
console.log(contains)       // true
console.log(keys)           // [ "firstItem", "secondItem" ]
console.log(size)           // 2
console.log(clone)          // { "firstItem" : false, "secondItem": "doesn't matter" }
console.log(cloneKeys)      // [ "firstItem", "secondItem" ]
console.log(shouldBeZero)   // 0
