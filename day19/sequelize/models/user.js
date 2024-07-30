const Sequelize = require("sequelize"); // Sequelize 모듈을 불러옴

class User extends Sequelize.Model {
  // 모델을 초기화하는 함수
  static initiate(sequelize) {
    User.init(
      {
        // 'name' 필드: 문자열 타입, 최대 길이 20, null 허용 안함, 유니크 제약 조건
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        // 'age' 필드: 정수 타입, 양수만 허용, null 허용 안함
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        // 'married' 필드: 불리언 타입, null 허용 안함
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        // 'comment' 필드: 텍스트 타입, null 허용
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        // 'created_at' 필드: 날짜 타입, null 허용 안함, 기본값은 현재 시간
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize, // Sequelize 인스턴스
        timestamps: false, // 타임스탬프 사용 안함
        underscored: false, // 스네이크 케이스 대신 카멜 케이스 사용
        modelName: "User", // 모델 이름
        tableName: "members", // 테이블 이름
        paranoid: false, // 삭제된 레코드의 실제 삭제
        charset: "utf8", // 데이터베이스의 문자 집합
        collate: "utf8_general_ci", // 데이터베이스의 정렬 방식
      }
    );
  }

  // 관계를 설정하는 함수 (현재 비어 있음)
  static associate(db) {}
}

// User 모델을 모듈로 내보냄
module.exports = User;
