/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : project

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 18/06/2021 21:10:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tb_id` int(11) NULL DEFAULT NULL,
  `user_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comValue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (25, 3, '小米', '/images/1623507166684.jpg', '很好', '2021-06-12 22:12:46');
INSERT INTO `comment` VALUES (26, 4, '先', '/images/1623657162253.jpg', '好，美味', '2021-06-14 15:52:42');
INSERT INTO `comment` VALUES (27, 3, '小李1', '/images/1623743182163.jpg', '1234', '2021-06-15 15:46:22');
INSERT INTO `comment` VALUES (28, 1, '小王', '/images/1623848088388.jpg', '很好', '2021-06-16 20:54:48');

-- ----------------------------
-- Table structure for demo
-- ----------------------------
DROP TABLE IF EXISTS `demo`;
CREATE TABLE `demo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `c_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 177 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for demo1
-- ----------------------------
DROP TABLE IF EXISTS `demo1`;
CREATE TABLE `demo1`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tb_id` int(11) NULL DEFAULT NULL,
  `tb_price` decimal(10, 2) NULL DEFAULT NULL,
  `tb_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tb_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 226 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for manage
-- ----------------------------
DROP TABLE IF EXISTS `manage`;
CREATE TABLE `manage`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manage
-- ----------------------------
INSERT INTO `manage` VALUES (1, 'kbcxy', '123456');

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ori_price` decimal(10, 2) NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `type` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 114 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES (1, '茅台', '/images/img1/1.jpeg', 3500.00, 2000.00, 1);
INSERT INTO `shop` VALUES (2, '花生油', '/images/img1/2.jpeg', 120.00, 99.00, 1);
INSERT INTO `shop` VALUES (3, '纯牛奶', '/images/img1/3.jpg', 78.00, 60.00, 1);
INSERT INTO `shop` VALUES (4, '酱油', '/images/img1/4.jpg', 29.00, 19.00, 1);
INSERT INTO `shop` VALUES (5, '维他', '/images/img1/5.jpeg', 3.00, 1.50, 1);
INSERT INTO `shop` VALUES (6, '百岁山', '/images/img1/6.jpg', 3.00, 2.50, 1);
INSERT INTO `shop` VALUES (7, '泰国茉莉香米5kg', '/images/img1/img2/1.jpg', 102.99, 99.98, 2);
INSERT INTO `shop` VALUES (8, 'RIO锐澳', '/images/img1/img2/2.jpg', 109.98, 104.99, 2);
INSERT INTO `shop` VALUES (9, 'Freeplus/芙丽芳丝净润洗面霜', '/images/img1/img2/3.jpg', 189.98, 150.99, 2);
INSERT INTO `shop` VALUES (10, '汤达人日式豚骨拉面', '/images/img1/img2/4.jpg', 36.98, 25.00, 2);
INSERT INTO `shop` VALUES (11, '盛耳莲子100g', '/images/img1/img2/5.jpg', 19.98, 16.90, 2);
INSERT INTO `shop` VALUES (12, '爱茉莉/RYO 绿吕', '/images/img1/img2/6.jpg', 98.90, 87.90, 2);
INSERT INTO `shop` VALUES (13, '郎酒郎牌郎酒', '/images/img1/img3/1.jpg', 1800.00, 1688.00, 3);
INSERT INTO `shop` VALUES (14, '好侍百梦多咖喱', '/images/img1/img3/2.jpg', 79.00, 69.00, 3);
INSERT INTO `shop` VALUES (15, '柴火大院五常大米', '/images/img1/img3/3.jpg', 169.00, 149.98, 3);
INSERT INTO `shop` VALUES (16, '真空鲜食粘玉米棒', '/images/img1/img3/4.jpg', 79.00, 59.98, 3);
INSERT INTO `shop` VALUES (17, '农夫山泉矿泉水', '/images/img1/img3/w-1.jpg', 48.98, 39.97, 4);
INSERT INTO `shop` VALUES (18, '法国EVIAN依云高端水矿泉水', '/images/img1/img3/w-2.jpg', 298.00, 288.00, 4);
INSERT INTO `shop` VALUES (19, '恒大冰泉低钠水天然矿泉水', '/images/img1/img3/w-3.jpg', 79.98, 72.00, 4);
INSERT INTO `shop` VALUES (20, '元气森林苏打气泡水', '/images/img1/img3/w-4.jpg', 156.98, 149.98, 4);
INSERT INTO `shop` VALUES (21, '快活林定制水整箱矿泉水', '/images/img1/img3/w-5.jpg', 1099.00, 999.00, 4);
INSERT INTO `shop` VALUES (22, '5100西藏冰川矿泉水', '/images/img1/img3/w-6.jpg', 359.99, 339.98, 4);
INSERT INTO `shop` VALUES (23, '屈臣氏 蒸馏水', '/images/img1/img3/w-7.jpg', 39.98, 29.00, 4);
INSERT INTO `shop` VALUES (24, '【卫龙_亲嘴烧】', '/images/img1/img3/l-1.jpg', 209.99, 199.00, 4);
INSERT INTO `shop` VALUES (25, '三只松鼠_坚果大礼包1748g/9袋', '/images/img1/img3/l-2.jpg', 312.00, 300.00, 4);
INSERT INTO `shop` VALUES (26, 'GODIVA歌帝梵杯装牛奶黑巧克力', '/images/img1/img3/l-3.jpg', 65.00, 55.00, 4);
INSERT INTO `shop` VALUES (27, '大白兔500g原味奶糖', '/images/img1/img3/l-4.jpg', 38.98, 37.80, 4);
INSERT INTO `shop` VALUES (28, '沃隆每日坚果', '/images/img1/img3/l-5.jpg', 298.99, 289.00, 4);
INSERT INTO `shop` VALUES (29, '麦小呆手撕9号素肉', '/images/img1/img3/l-6.jpg', 39.80, 36.99, 4);
INSERT INTO `shop` VALUES (30, '洽洽益生菌每日坚果', '/images/img1/img3/l-7.jpg', 449.99, 439.98, 4);
INSERT INTO `shop` VALUES (31, '思乡山手撕大辣片', '/images/img1/img3/l-8.jpg', 31.89, 27.98, 4);
INSERT INTO `shop` VALUES (32, 'HP惠普tank519彩色墨仓式连供打印一体机', '/images/img1/img3/j-1.jpg', 1299.98, 1279.98, 4);
INSERT INTO `shop` VALUES (33, '尚巧厨俏侬披萨饼底半成品', '/images/img1/img3/j-2.jpg', 44.98, 39.99, 4);
INSERT INTO `shop` VALUES (34, '瓷砖清洁剂', '/images/img1/img3/j-3.jpg', 52.98, 48.00, 4);
INSERT INTO `shop` VALUES (35, '洗衣机槽清洗剂泡腾清洁片', '/images/img1/img3/j-4.jpg', 59.98, 56.00, 4);
INSERT INTO `shop` VALUES (36, '蹦蹦床家用儿童室内宝宝弹跳床', '/images/img1/img3/j-5.jpg', 379.99, 376.98, 4);
INSERT INTO `shop` VALUES (37, '3M细滑牙线棒', '/images/img1/img3/j-6.jpg', 152.00, 150.00, 4);
INSERT INTO `shop` VALUES (38, '盾王厨房大理石台面渗色清洁剂', '/images/img1/img3/j-7.jpg', 82.00, 78.00, 4);
INSERT INTO `shop` VALUES (39, '纳美纳米牙刷软毛', '/images/img1/img3/j-8.jpg', 72.69, 69.90, 4);
INSERT INTO `shop` VALUES (40, '鱼跃制氧机家用吸氧机', '/images/img1/img3/j-9.jpg', 5599.99, 5580.00, 4);
INSERT INTO `shop` VALUES (41, '硅胶防撞贴家用门把', '/images/img1/img3/j-10.jpg', 28.80, 25.80, 4);
INSERT INTO `shop` VALUES (42, '谭木匠KCBJ0702天然羊角梳子', '/images/img1/img3/g-1.jpg', 82.00, 70.00, 4);
INSERT INTO `shop` VALUES (43, '谭木匠天然羊角 玉兔按摩板', '/images/img1/img3/g-2.jpg', 102.00, 98.00, 4);
INSERT INTO `shop` VALUES (44, 'Braun/博朗男士剃须刀配件清洗液', '/images/img1/img3/g-3.jpg', 242.00, 239.00, 4);
INSERT INTO `shop` VALUES (45, 'DR SCALP宙斯清洁按摩梳健发头皮护理梳子', '/images/img1/img3/g-4.jpg', 1398.00, 1388.00, 4);
INSERT INTO `shop` VALUES (46, '修脚刀鹰嘴钳嵌甲勾专用指甲钳不锈钢指甲剪', '/images/img1/img3/g-5.jpg', 42.00, 39.00, 4);
INSERT INTO `shop` VALUES (47, '食用小苏打粉清洁皮肤牙齿去黄个人护理', '/images/img1/img3/g-6.jpg', 69.98, 68.90, 4);
INSERT INTO `shop` VALUES (48, '欧莱雅男士哑光发泥自然塑型强力定型喷雾', '/images/img1/img3/g-7.jpg', 129.00, 128.00, 4);
INSERT INTO `shop` VALUES (49, '家用低压加热帽焗油机蒸汽焗油发膜蒸发帽', '/images/img1/img3/g-8.jpg', 359.98, 358.00, 4);
INSERT INTO `shop` VALUES (113, '0', '/images/1623847798846.jpg', 89.00, 89.00, 0);

-- ----------------------------
-- Table structure for shop1
-- ----------------------------
DROP TABLE IF EXISTS `shop1`;
CREATE TABLE `shop1`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NULL DEFAULT NULL,
  `shop_text` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `1`(`shop_id`) USING BTREE,
  CONSTRAINT `1` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop1
-- ----------------------------
INSERT INTO `shop1` VALUES (1, 1, '酱香突出、幽雅细腻、酒体醇厚、回味悠长，空杯留香持');
INSERT INTO `shop1` VALUES (2, 2, '齐鲁好油，鲁山一流。咱山东大地出好花生，好花生出好油，咱鲁山牌品质一流。');
INSERT INTO `shop1` VALUES (3, 3, '牛奶一股香甜令人醉，喝上一口连赞美。每天一瓶助成长，上床不愁睡不着');
INSERT INTO `shop1` VALUES (4, 4, '酱油是中国传统的调味品，用大豆或脱脂大豆或黑豆、小麦或麸皮，加入水、食盐酿造而成的液体调味品，色泽呈红褐色，有独特酱香，滋味鲜美，有助于促进食欲');
INSERT INTO `shop1` VALUES (5, 5, '好喝就要有点涩，真茶+真柠檬！”哈哈！维他柠檬茶的广告语已经给出了答案。那是一种好喝的“涩”，是真茶真柠檬的味道。');
INSERT INTO `shop1` VALUES (6, 6, '经典 浪漫 难忘 瞩目”。——你就是我的百岁山......');
INSERT INTO `shop1` VALUES (7, 7, '原装进口大米新米年货 非东北大米长粒香 原装进口 茉莉香米 香糯滑软');
INSERT INTO `shop1` VALUES (8, 8, 'RIO微醺，以浓郁的果味、独特的乳酸菌口味与朗姆、白兰地、伏特加相碰撞，令人印象深刻，打开一罐RIO微醺，淡淡的香气溢出，轻轻抿一口，微微的气泡与酒意，让人觉得舒缓放松，为独处时光增加了一抹色彩');
INSERT INTO `shop1` VALUES (9, 9, 'Freeplus/芙丽芳丝净润洗面霜100g温和清洁氨基酸洗面奶洁面正品氨基酸洁面 泡沫丰富 敏感肌适用 不易紧绷');
INSERT INTO `shop1` VALUES (10, 10, '汤达人日式豚骨拉面125g*5袋 泡面袋装速食\r\n速食爆款 经典日式豚骨面');
INSERT INTO `shop1` VALUES (11, 11, '盛耳莲子100g新鲜去芯磨皮白莲无芯干货搭银耳百合 羹莲香浓郁 粉糯可口 ');
INSERT INTO `shop1` VALUES (12, 12, ' 爱茉莉/RYO 绿吕无硅油清爽控油清香蓬松去屑男士女士洗发水400ml 无硅油海藻+薄荷 蓬松控油 洁净舒爽');
INSERT INTO `shop1` VALUES (13, 13, ' 郎酒郎牌郎酒53度500ml*6瓶酱香型粮食酒高度白酒整箱白酒送礼 传世酱香 经典普郎');
INSERT INTO `shop1` VALUES (14, 14, ' 好侍百梦多咖喱原味1号1000g块状咖喱调味料调料佐料大包装商用 口感柔和 ');
INSERT INTO `shop1` VALUES (15, 15, '柴火大院五常大米10kg稻花香米香甜软糯新米东北大米20斤家庭装 五常认证古法种植 营养丰盛 核心产区次日达');
INSERT INTO `shop1` VALUES (16, 16, '东北农嫂黄糯真空鲜食粘玉米棒8支装即食玉米粒非转基因粗粮代餐 非转基因 香糯软黏');
INSERT INTO `shop1` VALUES (17, 17, '380ml/550ml*24瓶整箱装弱碱性天然饮用水多省包邮 ');
INSERT INTO `shop1` VALUES (18, 18, '法国EVIAN依云高端水矿泉水纯净水天然饮用水500ml*24瓶装整箱 口感清新 晶莹剔透 优质水源');
INSERT INTO `shop1` VALUES (19, 19, ' 恒大冰泉低钠水天然矿泉水长白山弱碱饮用水500mL*24瓶装整箱包邮 源自长白山安宁泉 天然低钠更健康 官方直营');
INSERT INTO `shop1` VALUES (20, 20, '元气森林苏打气泡水0糖0脂0卡白桃葡萄荔枝多口味饮料480ml*12 多口味可选，2.5倍气泡，热卖爆款');
INSERT INTO `shop1` VALUES (21, 21, '快活林定制水整箱矿泉水定制logo小瓶装企业婚礼定做苏打水瓶装水');
INSERT INTO `shop1` VALUES (22, 22, '5100西藏冰川矿泉水 饮用天然矿泉水1.5升*12瓶大瓶装包邮 泡茶水 来自西藏海拔5100冰川 低氘小分子弱碱性水');
INSERT INTO `shop1` VALUES (23, 23, '屈臣氏 蒸馏水280ml*12瓶500ml水疗敷脸补水蒸脸泡面膜纯净饮用水 补水蒸脸 水疗调膜 直接饮用 皆可');
INSERT INTO `shop1` VALUES (24, 24, '辣条亲嘴条辣片大刀肉休闲食品小吃零食豆干小包 独立小包装 麻辣入味 劲道耐嚼 3种口味任选');
INSERT INTO `shop1` VALUES (25, 25, '三只松鼠_坚果大礼包1748g/9袋】网红健康零食每日坚果休闲食品 ');
INSERT INTO `shop1` VALUES (26, 26, 'GODIVA歌帝梵杯装牛奶黑巧克力5颗儿童节礼物进口零食 婚庆喜糖 多口味夹心巧克力');
INSERT INTO `shop1` VALUES (27, 27, '大白兔500g原味奶糖 结婚喜糖果婚庆儿童零食年货 快乐分享大白兔');
INSERT INTO `shop1` VALUES (28, 28, '【龚俊代言】沃隆每日坚果750g混合坚果30包零食大礼包坚果礼盒装 6种营养搭配 坚果含量≥74% 日期新鲜\r\n\r\n ');
INSERT INTO `shop1` VALUES (29, 29, '麦小呆手撕9号素肉大豆蛋白豆干辣条零食小吃休闲食品好吃');
INSERT INTO `shop1` VALUES (30, 30, '洽洽益生菌每日坚果恰恰儿童混合坚果干果果仁孕妇零食750g/30装 每一粒坚果 都裹着益生菌');
INSERT INTO `shop1` VALUES (31, 31, '思乡山手撕大辣片湖南麻辣网红零食辣条小吃儿时怀旧豆皮豆干整箱 一份4包，每包125g，共500g ');
INSERT INTO `shop1` VALUES (32, 32, 'HP惠普tank519彩色墨仓式连供打印一体机复印扫描531家用学生迷小型家庭办公室可连接手机无线喷墨照片A4商务');
INSERT INTO `shop1` VALUES (33, 33, '尚巧厨俏侬披萨饼底半成品9寸薄脆芝士碎拉丝家用披萨材料烘焙胚 轻薄拉丝 外酥脆内松软 十年披萨品牌');
INSERT INTO `shop1` VALUES (34, 34, '瓷砖清洁剂家用卫生间草酸强力去污厕所地砖地板浴室除垢清洗神器 3瓶装 去顽固污渍 洗护合一 不伤瓷砖');
INSERT INTO `shop1` VALUES (35, 35, '洗衣机槽清洗剂泡腾清洁片家用滚筒式污渍除垢神器消毒杀菌泡腾片 每盒12粒装【买2发4同款】清洁/除味/杀菌');
INSERT INTO `shop1` VALUES (36, 36, '蹦蹦床家用儿童室内宝宝弹跳床小孩成人健身带护网家庭玩具跳跳床 ');
INSERT INTO `shop1` VALUES (37, 37, '3M细滑牙线棒一次性家庭装安全超细便携随身剔牙清洁牙齿缝300支 细化耐用 深度清洁 洁净齿缝');
INSERT INTO `shop1` VALUES (38, 38, '盾王厨房大理石台面渗色清洁剂瓷砖强力去污人造石英石材深层清洗 强力清除染渗色 不伤表面');
INSERT INTO `shop1` VALUES (39, 39, '纳美纳米牙刷软毛成人清洁家用家庭组合装牙缝刷小头情侣男士专用 抗菌率*＞99% 减少细菌滋生');
INSERT INTO `shop1` VALUES (40, 40, '鱼跃制氧机家用吸氧机老人医用3L升浓度90%小型家庭式雾化氧气机 3L医用带雾化 稳定供氧 ');
INSERT INTO `shop1` VALUES (41, 41, '硅胶防撞贴家用门把手垫门后柜门防磕碰粒墙贴冰箱门贴防碰撞神器 买2送1 防撞消音降噪 柔软透明 小巧美观！');
INSERT INTO `shop1` VALUES (42, 42, '谭木匠KCBJ0702天然羊角梳子送爸爸妈妈长辈 护理秀发健康礼物 角梳 送父母');
INSERT INTO `shop1` VALUES (43, 43, '谭木匠天然羊角 玉兔按摩板 个人 清洁护理女性面部、背部美容板  白角羊角');
INSERT INTO `shop1` VALUES (44, 44, 'Braun/博朗男士剃须刀配件清洗液CCR4 清洁液4盒套装护理个人德国  清洗液 ');
INSERT INTO `shop1` VALUES (45, 45, 'DR SCALP宙斯清洁按摩梳健发头皮护理梳子女士 520 礼物头梳子 DR SCALP宙斯清洁按摩梳健发头皮护理梳子女士 520 礼物头梳子');
INSERT INTO `shop1` VALUES (46, 46, '修脚刀鹰嘴钳嵌甲勾专用指甲钳不锈钢指甲剪个人护理清洁工具套装 脚趾甲矫正 可修厚趾甲 剪甲沟钳');
INSERT INTO `shop1` VALUES (47, 47, '食用小苏打粉清洁皮肤牙齿去黄个人护理去黑头洗头发细粉美妆专用 200g随机发一包');
INSERT INTO `shop1` VALUES (48, 48, '欧莱雅男士哑光发泥自然塑型强力定型喷雾持久蓬松造型细软发质');
INSERT INTO `shop1` VALUES (49, 49, '家用低压加热帽焗油机蒸汽焗油发膜蒸发帽染发护发护理专用电热帽 24V低压 安全保障\r\n\r\n');

-- ----------------------------
-- Table structure for suggest
-- ----------------------------
DROP TABLE IF EXISTS `suggest`;
CREATE TABLE `suggest`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `suggest` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sumbit_time` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `3`(`user_id`) USING BTREE,
  CONSTRAINT `3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of suggest
-- ----------------------------
INSERT INTO `suggest` VALUES (5, NULL, '大家好', '2383841272@qq.com', 'undefined', '2021-05-22 16:42:34');
INSERT INTO `suggest` VALUES (6, NULL, '大家好', '2383841272@qq.com', 'undefined', '2021-05-22 16:42:34');

-- ----------------------------
-- Table structure for tb_shop
-- ----------------------------
DROP TABLE IF EXISTS `tb_shop`;
CREATE TABLE `tb_shop`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `use_id` int(11) NULL DEFAULT NULL,
  `tb_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tb_price` decimal(10, 2) NULL DEFAULT NULL,
  `shop_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tb_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 99 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_shop
-- ----------------------------
INSERT INTO `tb_shop` VALUES (85, 1, '茅台', 2000.00, '/images/img1/1.jpeg', '1');
INSERT INTO `tb_shop` VALUES (86, 2, '纯牛奶', 60.00, '/images/img1/3.jpg', '3');
INSERT INTO `tb_shop` VALUES (87, 1, '酱油', 19.00, '/images/img1/4.jpg', '4');
INSERT INTO `tb_shop` VALUES (88, 1, '茅台', 2000.00, '/images/img1/1.jpeg', '1');
INSERT INTO `tb_shop` VALUES (89, 1, '茅台', 2000.00, '/images/img1/1.jpeg', '1');
INSERT INTO `tb_shop` VALUES (90, 1, '家用低压加热帽焗油机蒸汽焗油发膜蒸发帽', 358.00, '/images/img1/img3/g-8.jpg', '49');
INSERT INTO `tb_shop` VALUES (91, 1, '99', 99.00, '/images/1623657967028.jpg', '94');
INSERT INTO `tb_shop` VALUES (92, 1, '茅台', 2000.00, '/images/img1/1.jpeg', '1');
INSERT INTO `tb_shop` VALUES (93, 1, '花生油', 99.00, '/images/img1/2.jpeg', '2');
INSERT INTO `tb_shop` VALUES (94, 1, '纯牛奶', 60.00, '/images/img1/3.jpg', '3');
INSERT INTO `tb_shop` VALUES (96, 6, '纯牛奶', 60.00, '/images/img1/3.jpg', '3');
INSERT INTO `tb_shop` VALUES (97, 6, '花生油', 99.00, '/images/img1/2.jpeg', '2');
INSERT INTO `tb_shop` VALUES (98, 6, '维他', 1.50, '/images/img1/5.jpeg', '5');
INSERT INTO `tb_shop` VALUES (99, 7, '茅台', 2000.00, '/images/img1/1.jpeg', '1');

-- ----------------------------
-- Table structure for tb_shop1
-- ----------------------------
DROP TABLE IF EXISTS `tb_shop1`;
CREATE TABLE `tb_shop1`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `shop_Num` int(11) NULL DEFAULT NULL,
  `shop_money` decimal(10, 2) NULL DEFAULT NULL,
  `shop_datatime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_shop1
-- ----------------------------
INSERT INTO `tb_shop1` VALUES (16, 1, 1, 2000.00, '2021-06-09 21:39:59');
INSERT INTO `tb_shop1` VALUES (17, 2, 1, 60.00, '2021-06-12 15:42:44');
INSERT INTO `tb_shop1` VALUES (18, 1, 1, 19.00, '2021-06-12 17:19:26');
INSERT INTO `tb_shop1` VALUES (19, 1, 1, 2000.00, '2021-06-13 15:06:12');
INSERT INTO `tb_shop1` VALUES (20, 1, 11, 18457.00, '2021-06-14 18:56:23');
INSERT INTO `tb_shop1` VALUES (21, 1, 1, 2000.00, '2021-06-15 11:15:32');
INSERT INTO `tb_shop1` VALUES (22, 1, 1, 60.00, '2021-06-15 15:27:41');
INSERT INTO `tb_shop1` VALUES (23, 6, 1, 60.00, '2021-06-15 15:45:43');
INSERT INTO `tb_shop1` VALUES (24, 6, 5, 105.00, '2021-06-15 15:49:05');
INSERT INTO `tb_shop1` VALUES (25, 7, 1, 2000.00, '2021-06-16 20:54:03');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '先', '9ae0147d65724f72f74804af4aac6f13', '2383841272@qq.com', '2021-06-14 14:08:01');
INSERT INTO `users` VALUES (2, '小刘', '1234567', NULL, '2021-06-13 17:14:15');
INSERT INTO `users` VALUES (3, '小明', '9ae0147d65724f72f74804af4aac6f13', NULL, '2021-06-13 17:23:40');
INSERT INTO `users` VALUES (4, '小张', '9ae0147d65724f72f74804af4aac6f13', NULL, '2021-05-31 13:56:31');
INSERT INTO `users` VALUES (5, '小新', '9ae0147d65724f72f74804af4aac6f13', NULL, '2021-06-14 15:23:28');
INSERT INTO `users` VALUES (6, '小李1', '9ae0147d65724f72f74804af4aac6f13', NULL, '2021-06-15 15:43:44');
INSERT INTO `users` VALUES (7, '小王', '9ae0147d65724f72f74804af4aac6f13', NULL, '2021-06-16 20:52:09');

SET FOREIGN_KEY_CHECKS = 1;
