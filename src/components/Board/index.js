import React from 'react';
import './board.scss';

import Card from './Card';
import Scrollbar from 'react-scrollbars-custom';

import daily1 from '../../assets/daily_1.jpg';
import daily2 from '../../assets/daily_2.jpg';
import daily3 from '../../assets/daily_3.jpg';
import daily4 from '../../assets/daily_4.jpg';
import daily5 from '../../assets/daily_5.jpg';
import daily6 from '../../assets/daily_6.jpg';
import releaseradar from '../../assets/release_radar.jpeg';
import discoverweekly from '../../assets/discover_weekly.jpeg';
import topsongs from '../../assets/your_top_songs.jpg';
import tastebreakers from '../../assets/tastebreakers.jpg';
import timecapsule from '../../assets/time_capsule.jpg';
import viperangrashaman from '../../assets/viper_angra_shaman.jpeg';
import devnaestrada from '../../assets/dev_na_estrada.jpeg';
import lofibeats from '../../assets/lo_fi_beats.jpeg';
import nevermind from '../../assets/nevermind.jpeg';
import shaman from '../../assets/shaman.jpeg';
import slipknot from '../../assets/slipknot.jpeg';
import sepultura from '../../assets/sepultura.jpeg';
import ozzy from '../../assets/ozzy.jpeg';
import motorhead from '../../assets/motorhead.jpeg';
import slayer from '../../assets/slayer.jpeg';
import metallica from '../../assets/metallica.jpeg';
import hipnotize from '../../assets/hipnotize.jpeg';

const Board = () => {
  return (
    <Scrollbar style={{ width: '100%', height: '100%' }} noDefaultStyles>
      <div className="board-container">
        <ul className="board-container__nav">
          <li>Featured</li>
          <li>Podcasts</li>
          <li>Charts</li>
          <li>Genres & Moods</li>
          <li>New Releases</li>
          <li>Discover</li>
        </ul>
        <section className="board-container__section">
          <h1>Made for João</h1>
          <div className="cards-grid">
            <Card
              img={daily1}
              title="Daily Mix 1"
              paragraph="Sylosis, Trivium, Veil Of Maya and more"
            />
            <Card
              img={daily2}
              title="Daily Mix 2"
              paragraph="Anthrax, Shaman, Megadeth and more"
            />
            <Card
              img={daily3}
              title="Daily Mix 3"
              paragraph="The Smiths, Arctic Monkeys, Radiohead and more"
            />
            <Card
              img={daily4}
              title="Daily Mix 4"
              paragraph="Os Paralamas Do Sucesso, Paulinho Da Viola, Vinícius de Moraes and more"
            />
            <Card
              img={daily5}
              title="Daily Mix 5"
              paragraph="Pearl Jam, Ozzy Osbourne, Guns N' Roses and more"
            />
            <Card
              img={daily6}
              title="Daily Mix 6"
              paragraph="The Megas, Jonathan Parecki, Little V. and more"
            />
            <Card img={releaseradar} title="Release Radar" />
            <Card img={discoverweekly} title="Discover Weekly" />
            <Card img={topsongs} title="Your Top Songs 2018" />
            <Card img={tastebreakers} title="Tastebreakers" />
            <Card img={timecapsule} title="Your Time Capsule" />
          </div>
        </section>
        <section className="board-container__section">
          <h1>Recently played</h1>
          <div className="cards-grid">
            <Card
              img={viperangrashaman}
              title="Viper / Angra / Shaman / Andre Matos"
            />
            <Card img={devnaestrada} title="DNE - devnaestrada" />
            <Card img={lofibeats} title="Lo-Fi Beats" />
            <Card
              img={nevermind}
              title="Nevermind (Remastered)"
              paragraph="Nirvana"
            />
            <Card img={shaman} title="Shaman" rounded />
            <Card img={slipknot} title="Slipknot" rounded />
            <Card img={sepultura} title="Sepultura" rounded />
            <Card img={ozzy} title="Ozzy Osbourne" rounded />
            <Card img={motorhead} title="Motörhead" rounded />
            <Card img={slayer} title="Slayer" rounded />
            <Card img={metallica} title="Metallica" rounded />
            <Card
              img={hipnotize}
              title="Hypnotize"
              paragraph="System Of A Down"
            />
          </div>
        </section>
        <section className="board-container__section">
          <h1>More like Shaman</h1>
          <div className="cards-grid">
            <Card
              img="https://i.scdn.co/image/d771e2ab1c2abcf51cf16f5acb12d3c34ee1c81f"
              title="Angra"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/55309e037b9cef977229f4cec733326ddfda0611"
              title="Bruce Dickison"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/0c7a49a0ffe4916f7fbe6d9c96f7b1d028ad1501"
              title="Viper"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/a593bb57070046b7eb4f907688c85086d9297b67"
              title="Massacration"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/d1bc580d4b4704f3caa401c212831b158449218c"
              title="Almah"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/7fc08e505a9315a58e57b2c9c40577095c992e84"
              title="Andre Matos"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/f64556eda2b8e0306f5775eef8543568816535ce"
              title="Edu Falaschi"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/c93c5bc9d54a21acf201e4df54a5d40ba40f2a0b"
              title="Hangar"
              rounded
            />
            <Card
              img="https://i.scdn.co/image/36c1cf7861e57628669b13fc4541abe502b923b2"
              title="Dr. Sin"
              rounded
            />
          </div>
        </section>
        <section className="board-container__section">
          <h1>More like Lo-Fi Beats</h1>
          <div className="cards-grid">
            <Card
              img="https://pl.scdn.co/images/pl/default/3338466b5fccfe56c964102a7034f3dffec37084"
              title="Sunny Beats"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/493aa677d1976bdb87f467fe7b78dd2df4937934"
              title="Lofi Hip-Hop"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/d89b0208c8ec78f6726d1f75701a0b6b147e097c"
              title="Lush Lofi"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/a8080077b3f985739434b8142c57cded305ed2a6"
              title="Mellow Beats"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/ced19ff0168200c7addd7fc9508716234cfd2e56"
              title="Jazz Vibes"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/52d2cdb82275da5e56774c7aba2e9d774d718f45"
              title="Tender"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/e949fd0c49800a72cdd36d55e42e7fb3bafb6e3b"
              title="Road Trip To Tokyo"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/c0c05ce362f8f987b71a3d7bde8c057db6f39d66"
              title="Jazztronica"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/89f3f9dcec7da5bcc645c196f3d4589c7da409ad"
              title="Chill Out Music"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/07ea1b09d248866d981b1dd2ae2501e0a286d52a"
              title="Butter"
            />
          </div>
        </section>
        <section className="board-container__section">
          <h1>De volta ao passado!</h1>
          <div className="cards-grid">
            <Card
              img="https://pl.scdn.co/images/pl/default/3564fc54ef63114ac4f6ed5650cea4986e5bcca4"
              title="Gold BPM"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/5b64b60a4215cfe13b12cff862208d48726d80f1"
              title="Rock Forever"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/f190a7bf6fc15446b2214f734805d82624c1041d"
              title="Clássicos Sertanejos"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/e488f79f331bdd6388449565739ee9d194a99c8d"
              title="I Love My '90s Hip-Hop"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/9b9dfa8830d1c0643905371b835548ce6baca0dc"
              title="Indiespensável"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/1a3d4c5bfca412e2af65b5dc1493c71c3487706d"
              title="Pagode das Antigas"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/94e4ba089aa67dd26e52ed50aeae27e024cd54e0"
              title="Axé Saudade"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/87d254f636cb37d4fba7f43c553d6b2f5d596724"
              title="Clássicos do Funk"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/9ab448c2397655266f3a292d3c8ffc4ee5d5019d"
              title="Hinos Pop"
            />
            <Card
              img="https://pl.scdn.co/images/pl/default/18d630fa6569584c7f8acc15aac707e5be96f906"
              title="Samba de Raiz"
            />
          </div>
        </section>
        <section className="board-container__section">
          <h1>Charts</h1>
          <div className="cards-grid">
            <Card
              img="https://charts-images.scdn.co/REGIONAL_BR_DEFAULT.jpg"
              title="Brazil Top 50"
            />
            <Card
              img="https://charts-images.scdn.co/REGIONAL_GLOBAL_DEFAULT.jpg"
              title="Global Top 50"
            />
            <Card
              img="https://charts-images.scdn.co/VIRAL_GLOBAL_DEFAULT.jpg"
              title="Global Viral 50"
            />
            <Card
              img="https://charts-images.scdn.co/VIRAL_BR_DEFAULT.jpg"
              title="Brazil Viral 50"
            />
          </div>
        </section>
        <section className="board-container__section">
          <h1>Podcasts pra rir até chorar</h1>
          <div className="cards-grid">
            <Card
              img="https://i.scdn.co/image/99080f4de7368663381b402416bc49ce1683f3de"
              title="Filhos da Grávida de Taubaté"
            />
            <Card
              img="https://i.scdn.co/image/70a46edf656f44c36ee4aba2d7b33a8bd50f1bf5"
              title="Um Milkshake Chamado Wanda"
            />
            <Card
              img="https://i.scdn.co/image/c6a71112e2558ed5c8d2852ece6cd00d96c28690"
              title="Blackast"
            />
            <Card
              img="https://i.scdn.co/image/d698d7124647011b9dc07cf9f0c95db236a62f20"
              title="Jacaré BANcast"
            />
            <Card
              img="https://i.scdn.co/image/8ef2a16723a2e708561ea4037bcdf62d2f4d4c42"
              title="Libertinagem"
            />
            <Card
              img="https://i.scdn.co/image/c480af1432849dcb104c68a34f853e74c59967bd"
              title="Mução"
            />
            <Card
              img="https://i.scdn.co/image/a25e6cdc43b9380790a908dc309f01093768524e"
              title="Mundo Freak Confidencial"
            />
            <Card
              img="https://i.scdn.co/image/569e4e97faaedbbd8d10b007dfedaa279fff0675"
              title="Podcast do Totorial"
            />
            <Card
              img="https://i.scdn.co/image/eeca8e5bc231d153f3c19abbb1c0d4d20f63ea35"
              title="umdois Testando"
            />
            <Card
              img="https://i.scdn.co/image/9c76ed34a1680ea70ac9bd6aa358924911d68002"
              title="Pânico"
            />
            <Card
              img="https://i.scdn.co/image/74f45735b7e1b1a0adcf7d1312af9644207afa66"
              title="Xorume"
            />
            <Card
              img="https://i.scdn.co/image/6d147d8f65eb5604a466d7a74c91077fb8220744"
              title="Bobos sem Corte"
            />
          </div>
        </section>
      </div>
    </Scrollbar>
  );
};

export default Board;
