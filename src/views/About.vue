<template>
  <div class="about">
    <div class="content">
      <main>
        <router-link to="/" class="back-link">
          <i class="material-icons">chevron_left</i>
          <span>Back</span>
        </router-link>

        <div>
          <h1>About this site</h1>
          <p class="intro">
            This site is made to give the pole community a simpler way of viewing
            and browsing IPSF’s Code of Points compulsories.
          </p>
          <p>
            As a pole sport athlete I was tired of printing a hundred pages long
            pdf to bring with me for trainings. When preparing for nationals I often
            need to check the details of how a compulsory needs to be executed, and
            I found myself struggeling with finding specific compulsories on paper.
            I hope you find this site as useful as I do, and enjoy using it while
            practicing!
          </p>
          <p>
            This site is not made in collaboration with IPSF, and all the content
            is shamelessly stolen from their CoP pdf-file. I take zero resposibility
            for typos and incorrect data, but please reach out to me if you find
            something so I can correct it!
          </p>
        </div>
      </main>

      <aside>
        <h2>Who made this</h2>
        <p>
          My name is Martine Trulsrud, I’m a full-time developer and a part-time
          pole and aerial instructur in Oslo, Norway.
        </p>
        <p>
          I made this site for fun, with the goal of learning some new
          technologies while working on something inpiring and useful.
        </p>
        <p>
          You can reach my pole personality on instagram
          <a
            href="https://www.instagram.com/martinemartine/"
            target="_blank"
            rel="noopener noreferrer"
          >@martinemartine</a>, and my developer personality on twitter
          <a
            href="https://twitter.com/MartineTrulsrud"
            target="_blank"
            rel="noopener noreferrer"
          >@martinetrulsrud</a>
          for any questions.
        </p>
      </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/vars.scss";
.about {
  background-color: $dark-mode-background;
  min-height: 100vh;
}

.content {
  width: 90vw;
  max-width: 1000px;
  margin: auto;
  padding: $ws-xxxl;

  display: flex;
  justify-content: space-between;

  @media all and (max-width: 900px) {
    flex-direction: column;
    padding: $ws-m 0;
  }
}

main {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-basis: 60%;
  color: $grey-15;
  font-weight: 300;
  font-size: 1.8rem;

  @media all and (max-width: 900px) {
    flex-direction: column;
  }
}

aside {
  flex-basis: 35%;
  padding: 3.2rem;
  background-image: linear-gradient(
    to right bottom,
    #d4e0f5 0%,
    $ocean-20 100%
  );

  margin-top: 128px;

  a {
    color: $purple-bright-darker;
    font-weight: 600;
  }

  @media all and (max-width: 900px) {
    margin-top: $ws-l;
  }
}

h1,
h2 {
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 1px;
}

h1 {
  padding-bottom: 0.8rem;
}

h2 {
  font-size: 2.2rem;
  padding-bottom: 0.8rem;
  font-weight: 600;
}

.intro {
  font-size: 2rem;
  font-weight: 500;
}

p {
  line-height: 1.5;
  padding-bottom: 1.6rem;
}

.back-link {
  margin-top: 3.2rem;
  margin-left: -8rem;
  color: $dark-model-link-color;
  font-weight: 600;
  letter-spacing: 1px;
  width: max-content;
  text-transform: uppercase;
  font-size: 2.5rem;
  padding: 0.8rem;
  padding-right: 2.6rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-decoration: none;

  i {
    font-size: 4rem;
  }

  &:hover {
    background-color: $dark-mode-90;
  }

  @media all and (max-width: 900px) {
    margin-left: 0;
    padding: 0;
    padding-right: 0.8rem;
    padding-bottom: $ws-m;

    i {
      margin-left: -4px;
    }
  }
}
</style>