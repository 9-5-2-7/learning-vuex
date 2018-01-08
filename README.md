# learning-vuex

> learning vuex


## Getters
```js
    // now you have `count` in vuex state
    Vuex.Store({
        state: {
            count: 0
        }
    })


    // in you One.vue component, use this `state` but times 2
    // and your Tow.vue component, also use this `state` and still need times 2
    // you may do this...

    // One.vue
    computed: {
        count() {
            return this.$store.state.count * 2
        }
    }

    // Two.vue 
    computed: {
        count() {
            return this.$store.state.count * 2
        }
    }

    // BUT now, your are repeating yourself,
    // what if we do this calculation in one place, 
    // and when we need just refer to it
    // 
    // YES, vuex provide `Getters`

    Vuex.Store({
        state: {
            count: 0
        },

        getters: {
            doubleCount() {
                return store.state.count * 2
            }
        }
    })

    // After we using `getters`
    // 
    // One.vue
    computed: {
        count() {
            return this.$store.getters.doubleCount
        }
    }

    // Two.vue
    computed: {
        count() {
            return this.$store.getters.doubleCount
        }
    }


    // Now, what if we need another getter, and another getter...    
    computed: {
        count() {
            return this.$store.getters.doubleCount
        },
        another() {
            return this.$store.getters.anotherCount 
        },
        other() {
            return this.$store.getters.otherCount
        }
    }
    
    // every time we need to to write: => this.$store.getters.***
    // it's dull...
    // it's nice if we can just refer to `doubleCount`, `anotherCount`, `otherCount`
    // 
    // YES, you can!
    // vuex provide our `mapGetters`

    import { mapGetters } from 'vuex'
    computed: mapGetters([
        'doubleCount',
        'anotherCount',
        'otherCount'
    ])

    // BUT, waht if we has other computed property only in this component?
    // you can use ES6 `spread` operator, by doing like this:
    
    computed: {
        ...mapGetters([
            'doubleCount',
            'anotherCount',
            'otherCount'
        ]),

        customComputedProperty() {
            // 
        }
    }
    
    

    // SO, when to use getter?
    // 
    // Vuex docs say: 
    // Sometimes we may need to compute derived state based on store state, 
    // for example filtering through a list of items and counting them.


```


## Mutations
Now, you know how to get state from Vuex.

U can direct asscess state by using `this.$store.state.count`

Or using **Getters**

BUT...

How to **update** or **setting** or **change** the state?!

in Vuex, we don't use Setters

we use **Mutations**

And two things you should remember!

> Never ever directly to change vuex state! Alway use mutations

**Meaning: The only way to actually change state in a Vuex store is by committing a mutation.**


> Mutations Must Be Synchronous, that mutation handler functions must be synchronous. 

**Meaning: The mutation function can't live any async function!**


mutations notes refer to source code...
