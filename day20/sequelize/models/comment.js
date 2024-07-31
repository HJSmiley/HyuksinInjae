// Sequelize 모듈을 가져옴
const Sequelize = require("sequelize");

// Comment 클래스 정의, Sequelize.Model을 상속받음
class Comment extends Sequelize.Model {
  // Comment 모델 초기화 메서드
  static initiate(sequelize) {
    // Comment 모델의 필드와 설정 정의
    Comment.init(
      {
        // comment 필드: 문자열 타입, 최대 길이 100, null 허용 안됨
        comment: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        // created_at 필드: 날짜 타입, null 허용, 기본값으로 현재 시간 설정
        created_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        // Sequelize 인스턴스
        sequelize,
        // timestamps 설정: false (자동 생성되는 createdAt, updatedAt 필드 사용 안함)
        timestamps: false,
        // 모델 이름
        modelName: "Comment",
        // 테이블 이름
        tableName: "comments",
        // paranoid 설정: false (삭제된 레코드를 복구할 수 있는 삭제일자 필드 사용 안함)
        paranoid: false,
        // 캐릭터셋 설정: utf8mb4 (유니코드 문자 지원)
        charset: "utf8mb4",
        // 정렬 설정: utf8mb4_general_ci
        collate: "utf8mb4_general_ci",
      }
    );
  }

  // 다른 모델과의 관계 설정 메서드
  static associate(db) {
    // Comment 모델이 User 모델과 belongsTo 관계를 가짐
    // foreignKey: 'commenter'는 Comment 모델의 외래 키 필드 이름
    // targetKey: 'id'는 User 모델의 기본 키 필드 이름
    db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" });
  }
}

// Comment 클래스를 모듈로 내보냄
module.exports = Comment;
