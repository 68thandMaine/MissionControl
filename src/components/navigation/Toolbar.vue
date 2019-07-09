<template>
  <header class='toolbar'>
    <nav class='toolbar_navigation'>
      <div class='spacer' />
      <div class='toolbar_navigation-items'>
        <ul>
          <li>
            <font-awesome-icon icon='home' />
            <span @click='viewHome'>Home</span>
          </li>
          <li>
            <font-awesome-icon icon='plus-circle' />
            <span @click='viewNewContent'>Add Art</span>
          </li>
          <li>
            <font-awesome-icon icon='cat' />
            <span @click='viewElenor'>Elenor</span>
          </li>
          <li>
            <font-awesome-icon icon='envelope' />
            <span @click='viewInbox'>Messages</span>
          </li>
          <li>
             <font-awesome-icon icon='portrait' />
              <span @click='viewProfile'>Profile</span>
          </li>
        </ul>
      </div>
      </nav>
    </header>
</template>

<script>
export default {
name: 'Toolbar',
components: {},
methods: {
  viewInbox() {
    this.$router.push({ path:'/inbox' });
    this.$emit('click', 'InboxMenu');
  },
  viewHome() {
    this.$router.push ({ path: '/'});
    this.$emit('click', '');
  },
  viewElenor() {
    // this.$router.push({ path:'/inbox' });
    // this.$emit('click', 'inbox');
  },
  viewProfile() {
    // this.$router.push({ path:'/inbox' });
    // this.$emit('click', 'inbox');
  },
  viewNewContent() {
    // this.$router.push({ path:'/inbox' });
    // this.$emit('click', 'inbox');
  },
}
};
</script>

<style>
  .toolbar {
    background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
    height: 7%;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  .toolbar_navigation {
    align-items: center;
    display:  flex;
    height: 100%;
    padding: 0 1rem;
  }

  .toolbar_navigation-items span {
    color: #fff;
    font-size: 1.25rem;
    text-decoration: none;
    border-bottom: solid 1px white;
    margin-left: 1rem;
  }
  .toolbar_navigation-items li:hover,
  .toolbar_navigation-items span:hover,
  .toolbar_navigation-items li:active {
    color:  #fa923f;
  }
  .toolbar_navigation-items ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .toolbar_navigation-items li {
    color: #fff;
    padding: 0 1rem;
  }
  .spacer {
    flex: 1;
  }
</style>
