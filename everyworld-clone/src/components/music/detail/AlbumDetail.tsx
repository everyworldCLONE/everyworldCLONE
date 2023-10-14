import React from 'react';
import * as S from './AlbumDetail.style';
import Img1 from '../../../assets/begin-again.png';
import DetailList from './DetailList';
import FooterImg from '../../../assets/footer-img.png';
import FooterSvg from '../../../assets/icons/album-footer.svg';

const AlbumDetail = () => {
  return (
    <S.Wrap>
      <div>
        <S.Container>
          <S.AlbumCover>
            <S.AlbumImg>
              <img src={Img1} />
            </S.AlbumImg>
            <S.AlbumName>
              <div>
                <h2>
                  <span>BEGIN</span>
                  <span style={{ fontWeight: '700' }}>AGAIN</span>
                </h2>
              </div>
            </S.AlbumName>
          </S.AlbumCover>
          <S.AlbumDetail>
            <DetailList />
          </S.AlbumDetail>
        </S.Container>
        <S.DetailFooter>
          <S.DetailFooterImg>
            <img src={FooterImg} />
            <div />
          </S.DetailFooterImg>
        </S.DetailFooter>
      </div>
    </S.Wrap>
  );
};

export default AlbumDetail;
