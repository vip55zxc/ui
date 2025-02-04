console.error(
  '你没有开启按需加载，如果遇到问题，请参考 https://cqkqinfo.github.io/ui/#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD 进行配置',
);
/**
 * 选择器
 */
export { default as Picker } from './picker';
/**
 * 根据城市数据的value获取城市名称
 */
export { default as getAddress } from './get-address';
export { default as Button } from './button';
/**
 * 用于各种布局分割的组件
 */
export { default as Space } from './space';
/**
 * 阴影组件
 */
export { default as Shadow } from './shadow';
/**
 * 包装组件
 */
export { default as NeedWrap } from './need-wrap';
/**
 * 日历
 */
export { default as Calendar } from './calendar';
/**
 * 分块标题
 */
export { default as PartTitle } from './part-title';
/**
 * 没有数据占位
 */
export { default as NoData } from './no-data';
/**
 * 可见元素
 */
export { default as Visible } from './visible';
/**
 * 列表组件，可以进行懒加载
 */
export { default as List } from './list';
/**
 * 原始输入框
 */
export { default as ReInput } from './re-input';
/**
 * 原始输入域
 */
export { default as ReTextarea } from './re-textarea';
/**
 * 数字输入框
 */
export { default as InputNumber } from './input-number';
/**
 * 切换Tab
 */
export { default as Tab } from './tab';
/**
 * 步骤条
 */
export { default as Step } from './step';
/**
 * 步骤条
 */
export { default as Search } from './search';
/**
 * 二维码
 */
export { default as QrCode } from './qr-code';
/**
 * 条形码
 */
export { default as BarCode } from './bar-code';
/**
 * 图标
 */
export { default as Icon } from './icon';
/**
 * 旋转动画
 */
export { default as Rotate } from './rotate';
/**
 * 菜单
 */
export { default as Menu } from './menu';

/**
 * 下拉菜单
 */
export { default as DropDownMenu } from './drop-down-menu';

/**
 * 下拉菜单子项
 */
export { default as DropDownMenuItem } from './drop-down-menu-item';

/**
 * 加载组件
 */
export { default as Loading } from './loading';

/**
 * 超出组件
 */
export { default as Exceed } from './exceed';

/**
 * 常用图片
 */
export { default as CommonImg } from './common-img';

/**
 * 折叠图片
 */
export { default as Fold } from './fold';

/**
 * 富文本
 */
export { default as RichText } from './rich-text';
/**
 * 单选
 */
export { default as Radio } from './radio';
/**
 * 多选
 */
export { default as CheckBox } from './check-box';
/**
 * 开关选择器
 */
export { default as Switch } from './switch';
/**
 * 评分组件
 */
export { default as Rate } from './rate';
/**
 * 通告栏
 */
export { default as NoticeBar } from './notice-bar';
/**
 * 配置项
 */
export { default as ConfigProvider } from './config-provider';
/**
 * 底部导航栏
 */
export { default as TabBar } from './tab-bar';
/**
 * 表单
 */
export { default as Form } from './form';
/**
 * 温馨提示
 */
export { default as Tip } from './tip';
/**
 * 表单项
 */
export { default as FormItem } from './form-item';
/**
 * 显示loading
 */
export { default as showLoading } from './show-loading';
/**
 * axios网络请求
 */
export { default as axios } from './axios';
/**
 * store 存储器
 */
export { default as storage } from './storage';
/**
 * 显示弹窗
 */
export { default as showModal } from './show-modal';
/**
 * 显示提示
 */
export { default as showToast } from './show-toast';
/**
 * 隐藏loading
 */
export { default as hideLoading } from './hide-loading';
/**
 * 单位转换
 */
export { default as rpxToPx } from './rpx-to-px';
// /**
//  * 单位转换
//  */
// export { default as pxToRpx } from './px-to-rpx';
/**
 * 让change事件转移
 */
export { default as TransferChange } from './transfer-change';
/**
 * 页面组件
 */
export { default as Page } from './page';
/**
 * 标签组件
 */
export { default as Tag } from './tag';
/**
 * 列表项
 */
export { default as ListItem } from './list-item';
/**
 * 背景图
 */
export { default as BackgroundImg } from './background-img';
/**
 * 分割线
 */
export { default as Divider } from './divider';
/**
 * 表格
 */
export { default as Table } from './table';
/**
 * f2图表
 */
export { default as F2 } from './f2';
/**
 * 反应更快的原生响应组件
 */
export { default as Native } from './native';
/**
 * 获取元素布局
 */
export { default as useViewLayout } from './use-view-layout';
/**
 * 弹出层
 */
export { default as Sheet } from './sheet';
/**
 * 操作项
 */
export { default as ActionSheet } from './action-sheet';
/**
 * 固定
 */
export { default as Fixed } from './fixed';
/**
 * 主题色文字
 */
export { default as ColorText } from './color-text';
/**
 * 切换器
 */
export { default as Swiper } from './swiper';
/**
 * 根据地址获取id
 */
export { default as getAddressId } from './get-address-id';
/**
 * 图片预览
 */
export { default as previewImage } from './preview-image';
/**
 * 获取位置
 */
export { default as getLocation } from './get-location';
/**
 * 获取本地储存
 */
export { default as getStorageSync } from './get-storage-sync';
/**
 * 设置本地储存
 */
export { default as setStorageSync } from './set-storage-sync';
/**
 * 移除本地储存
 */
export { default as removeStorageSync } from './remove-storage-sync';
/**
 * 清除本地储存
 */
export { default as clearStorageSync } from './clear-storage-sync';
/**
 * 地图组件
 */
export { default as Map } from './map';
/**
 * 创建地图上下文
 */
export { default as createMapContext } from './create-map-context';
/**
 * 订阅消息
 */
export { default as requestSubscribeMessage } from './request-subscribe-message';
/**
 * 平台组件
 */
export { default as Platform } from './platform';
/**
 * 调试模式
 */
export { default as debug } from './debug';
/**
 * 获取版本
 */
export { default as getVersion } from './get-version';
/**
 * 获取平台
 */
export { default as getPlatform } from './get-platform';
/**
 * 获取描述信息
 */
export { default as getAccountInfoSync } from './get-account-info-sync';
/**
 * 表单规则
 */
export { default as formRules } from './form-rules';
/**
 * 拼图验证
 */
export { default as Jigsaw } from './jigsaw';
/**
 * 显示频繁校验
 */
export { default as showFrequentModal } from './show-frequent-modal';
/**
 * 滚动视图
 */
export { default as ScrollView } from './scroll-view';
/**
 * 全平台图片上传组件
 */
export { default as UploadImg } from './upload-img';
/**
 * 图片
 */
export { default as Image } from './image';
/**
 * 索引选择器
 */
export { default as Indexes } from './indexes';
/**
 * 水印
 */
export { default as WaterMark } from './water-mark';
/**
 * 骨架屏
 */
export { default as Skeleton } from './skeleton';
/**
 * 选择文件
 */
export { default as selectFiles } from './select-files';
/**
 * 上传文件
 */
export { default as uploadFile } from './upload-file';
/**
 * 跳转小程序
 */
export { default as OpenWeapp } from './open-weapp';
/**
 * 扫描二维码
 */
export { default as scanCode } from './scan-code';
/**
 * 选择图片
 */
export { default as chooseImage } from './choose-image';
/**
 * 设置剪切板
 */
export { default as setClipboardData } from './set-clipboard-data';
/**
 * 读取剪切板
 */
export { default as getClipboardData } from './get-clipboard-data';
/**
 * 版本变量
 */
export { default as versionVariable } from './version-variable';
/**
 * 确认弹出层
 */
export { default as AffirmSheet } from './affirm-sheet';
/**
 * 功能磁贴
 */
export { default as Tile } from './tile';
/**
 * 创建动画实例
 */
export { default as createAnimation } from './create-animation';
/**
 * 异步获取城市数据
 */
export { default as getAddressOptions } from './get-address-options';
/**
 * 使用文字转语音
 */
export { default as useTTS } from './use-t-t-s';
/**
 * 隐藏底部栏
 */
export { default as hideTabBar } from './hide-tab-bar';
/**
 * 显示底部栏
 */
export { default as showTabBar } from './show-tab-bar';
/**
 * 隐藏回到首页按钮
 */
export { default as hideAppHomeButton } from './hide-app-home-button';
/**
 * 跳转到小程序
 */
export { default as navigateToMiniProgram } from './navigate-to-mini-program';
/**
 * 保存图片到相册
 */
export { default as saveImageToPhotosAlbum } from './save-image-to-photos-album';
/**
 * px转rpx
 */
export { default as pxToRpx } from './px-to-rpx';
/**
 * 切换变量
 */
export { default as switchVariable } from './switch-variable';
/**
 * 滑动操作
 */
export { default as SwipeAction } from './swipe-action';
/**
 * 金额
 */
export { default as Price } from './price';
/**
 * 弹窗
 */
export { default as Modal } from './modal';
/**
 * 删除
 */
export { default as Del } from './del';
/**
 * 时间线
 */
export { default as TimeLine } from './time-line';
/**
 * 显示操作
 */
export { default as showActionSheet } from './show-action-sheet';
/**
 * 设置导航栏颜色
 */
export { default as setNavigationBarColor } from './set-navigation-bar-color';
/**
 * 设置导航栏标题
 */
export { default as setNavigationBarTitle } from './set-navigation-bar-title';
/**
 * 获取系统信息
 */
export { default as useGetSystemInfoSync } from './use-get-system-info-sync';
/**
 * 获取安全区域
 */
export { default as useSafeArea } from './use-safe-area';
/**
 * 设置标题
 */
export { default as useTitle } from './use-title';
/**
 * 跨端webSocket
 */
export { default as useWebSocket } from './use-web-socket';
/**
 * 获取当前页面路径
 */
export { default as getCurrentPage } from './get-current-page';
/**
 * 倒计时
 */
export { default as DownTime } from './down-time';
/**
 * 兼容全平台的window对象
 */
export { default as window } from './window';
/**
 * 视频
 */
export { default as Video } from './video';
/**
 * 网页视图
 */
export { default as WebView } from './web-view';

/**
 * 车牌号码输入键盘
 */
export { default as LicenseKeyBoard } from './license-key-board';

/**
 * 车牌号码输入框
 */
export { default as InputLicenseKeyBoard } from './input-license-key-board';
/**
 * 使用回调页面
 */
export { default as useBackUrl } from './use-back-url';
/**
 * 是否是微信环境
 */
export { default as isWx } from './is-wx';
/**
 * 使用cdn
 */
export { default as useImportCDN } from './use-import-c-d-n';
/**
 * 引入cdn
 */
export { default as importCDN } from './import-c-d-n';
/**
 * 分页器
 */
export { default as Pagination } from './pagination';
/**
 * 引入在线css
 */
export { default as importOnlineCss } from './import-online-css';
/**
 * 引入在线组件
 */
export { default as importOnlineComponent } from './import-online-component';
