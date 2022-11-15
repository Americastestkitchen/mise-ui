import styles from './MyStuffCard.module.scss';
import Icon from '../../tokens/Icons/Icon/Icon';
import EditorialText from '../../partials/EditorialText/EditorialText';
import FavoriteCard from './partials/FavoriteCard/FavoriteCard'
import {Favorite} from './types'

import Link from '../../partials/Links/Link/Link';

const content = {
  favorites: {
    ctaCopy: "Start exploring and we bet you’ll find more than a few you’ll want to save for later!",
    headline: "My Favorites",
    url: "/favorites"
  },
  personalized: [
    {
      key: "fresh-picks",
      ctaCopy: "Personalized picks based on your favorites.",
      headline: "Fresh Picks For You",
      icon: "lightning",
      linkAgnostic: false,
      url: "/favorite_collections/fresh_picks", 
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      key: "surprise-me",
      ctaCopy: "Find a new exciting recipe to try today!",
      headline: "Surprise Me",
      icon: "sparkle",
      linkAgnostic: true,
      url: "/", //TODO: Will this be a value from BE vs. being a static url?
      visibilityRules: ["Member", "Anon", "Registrant", "Cancelled"]
    },
    {
      key: "my-account",
      headline: "My Account",
      icon: "user",
      linkAgnostic: false,
      url: "/user",
      visibilityRules: ["Member"]
    },
    {
      key: "manage-profile",
      headline: "Manage Profile",
      icon: "user",
      linkAgnostic: false,
      url: "/user", //TODO: get the URL for this profile
      visibilityRules: ["Registrant", "Cancelled"]
    }
  ],
  ctaFooter: {
    Anon: "<em>Members get these tools (and more) with All Access. <a href='#'>Try for a month!</a></em>",
    Registrant: "<em>Members get unlimited access to the full catalog (and more); <a href='#'>upgrade and see!</a></em>",
    Cancelled: "<em>Members get unlimited access to the full catalog (and more); <a href='#'>reacativate and see!</a></em>",
    Member: ""
  }
}

export type Icons = "lightning" | "save" | "user" | "sparkle"
type Auth = "Member" | "Anon" | "Registrant" | "Cancelled" //TODO: These are TBD until known values from BE

export type MyStuffProps = {
  authCode: Auth;
  favoritesList?: Favorite[];
  onClick?(): void;
}

export const MyStuff: React.FC<MyStuffProps> = ({ authCode, favoritesList, onClick }) => {
  const { personalized, favorites, ctaFooter } = content
  const hasNoFavorites = !favoritesList || authCode === 'Anon'
  return (
    <aside className={`${styles["container"]} ${styles["container--is-sticky"]}`}>
      <header className={styles["header"]}>
        <h2 className={styles["header__title"]}>My Stuff</h2>
      </header>
      <section className={`${styles["section"]} ${styles["section--is-favorites"]}`}>
        <header className={styles["section-header"]}>
          <h3 className={styles["section-header__heading"]}>
            <Icon 
              className={styles["section-header__icon"]}
              type="save"
            />
            <Link
              className={styles["section-header__link"]}
              path={favorites.url}
            >
              {favorites.headline}
            </Link>
          </h3>
        </header>
        {hasNoFavorites && 
          <p className={styles["section__description"]}>{favorites.ctaCopy}</p>
        }
        {(!!favoritesList && authCode !== 'Anon') && (
          <div className={styles.favoritesListWrapper}>
          {favoritesList.map((favorite, index: number) => (
            <div key={index} className={styles.favoritesList}>
              <FavoriteCard favorite={favorite}/>
            </div>
          ))}
          </div>
        )}
      </section>
        {
        personalized.map((pzn, index: number) => {
          const icon = pzn.icon as Icons
          return (
            <>
              {pzn.visibilityRules.includes(authCode) && (
                <section key={`${pzn.key}-${index}`} className={`${styles["section"]} ${styles[`section--is-${pzn.key}`]}`}>
                  <header className={styles["section-header"]}>
                    <h3 className={styles["section-header__heading"]}>
                      <Icon
                        className={styles["section-header__icon"]}
                        type={icon}
                      />
                      <Link
                        className={styles["section-header__link"]}
                        path={pzn.url}
                      >
                        {pzn.headline}
                      </Link>
                    </h3>
                  </header>
                  <p className={styles["section__description"]}>{pzn.ctaCopy}</p>
                </section>
              )}
            </>
          )
        })
      }
      {authCode !== "Member" && 
        <footer className={styles["footer"]}>
          <EditorialText content={ctaFooter[authCode]} />
        </footer>
      }
    </aside>
  );
}

export default MyStuff