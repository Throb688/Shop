/*!
 * 砌体打包 v4.2.2
 * 级联网格布局库
 * https://masonry.desandro.com
 * 麻省理工学院许可证
 * 大卫·德桑德罗
 */

/**
 * Bridget 制作 jQuery 小部件
 * v2.0.1
 * 麻省理工学院执照
 */

/* jshint 浏览器：true，strict：true，undef：true，未使用：true */

（功能（窗口，工厂）{
    // 通用模块定义
    /*jshint strict: false */ /* 全局定义，模块，需要 */
    if ( typeofdefine == 'function' && define.amd ) {
      // 超微
      定义（'jquery-bridget/jquery-bridget'，['jquery']，函数（jQuery）{
        返回工厂（窗口，jQuery）；
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // 通用JS
      module.exports = 工厂（
        窗户，
        要求（'jquery'）
      );
    } 别的 {
      // 浏览器全局
      window.jQueryBridget = 工厂（
        窗户，
        窗口.jQuery
      );
    }
  
  }（窗口，函数工厂（窗口，jQuery）{
  '使用严格';
  
  // ----- 实用程序 ----- //
  
  var arraySlice = Array.prototype.slice;
  
  // 记录错误的辅助函数
  // $.error 中断 jQuery 链接
  var console = window.console;
  var logError = typeof console == 'undefined' ? 功能（） {} ：
    功能（消息）{
      控制台错误（消息）；
    };
  
  // ----- jQueryBridget ----- //
  
  函数 jQueryBridget（命名空间，插件类，$）{
    $ = $ || jQuery || 窗口.jQuery;
    如果（！$）{
      返回;
    }
  
    // 添加选项方法 -> $().plugin('option', {...})
    如果（！PluginClass.prototype.option）{
      // 选项设置器
      PluginClass.prototype.option = function( opts ) {
        // 如果不是对象则退出
        如果 ( !$.isPlainObject( opts ) ){
          返回;
        }
        this.options = $.extend( true, this.options, opts );
      };
    }
  
    // 制作 jQuery 插件
    $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
      if ( typeof arg0 == 'string' ) {
        // 方法调用 $().plugin( 'methodName', { options } )
        // 将参数移动 1
        var args = arraySlice.call( 参数, 1 );
        返回方法调用（这个，arg0，args）；
      }
      // 只是 $().plugin({ options })
      普通调用（这个，arg0）；
      返回这个；
    };
  
    // $().plugin('methodName')
    函数方法调用（$elems，methodName，args）{
      变量返回值；
      var pluginMethodStr = '$().' + 命名空间 + '("' + methodName + '")';
  
      $elems.each( function( i, elem ) {
        // 获取实例
        var instance = $.data( elem, namespace );
        如果（！实例）{
          logError( namespace + ' 未初始化。无法调用方法，即 ' +
            pluginMethodStr );
          返回;
        }
  
        var method = instance[ methodName ];
        if (!method || methodName.charAt(0) == '_' ) {
          logError( pluginMethodStr + ' 不是一个有效的方法' );
          返回;
        }
  
        // 应用方法，获取返回值
        var value = method.apply( instance, args );
        // 设置返回值，如果返回值，只使用第一个值
        returnValue = returnValue === 未定义？值：返回值；
      });
  
      返回返回值！== 未定义？返回值：$elems;
    }
  
    function plainCall( $elems, options ) {
      $elems.each( function( i, elem ) {
        var instance = $.data( elem, namespace );
        如果（实例）{
          // 设置选项和初始化
          实例选项（选项）；
          实例._init();
        } 别的 {
          // 初始化新实例
          instance = new PluginClass( elem, options );
          $.data( elem, namespace, instance );
        }
      });
    }
  
    updateJQuery( $ );
  
  }
  
  // ----- 更新JQuery ----- //
  
  // 为 v1 向后兼容设置 $.bridget
  函数 updateJQuery( $ ) {
    if ( !$ || ( $ && $.bridget ) ) {
      返回;
    }
    $.bridget = jQueryBridget;
  }
  
  updateJQuery( jQuery || window.jQuery );
  
  // ----- ----- //
  
  返回 jQueryBridget;
  
  }));
  
  /**
   * EvEmitter v1.1.0
   * 小事件发射器
   * 麻省理工学院许可证
   */
  
  /* jshint 未使用：真，undef：真，严格：真 */
  
  （功能（全局，工厂）{
    // 通用模块定义
    /* jshint strict: false */ /* 全局定义、模块、窗口 */
    if ( typeofdefine == 'function' && define.amd ) {
      // AMD - RequireJS
      定义（'电子发射器/电子发射器'，工厂）；
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } 别的 {
      // 浏览器全局变量
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  
  
  函数 EvEmitter() {}
  
  var proto = EvEmitter.prototype;
  
  proto.on = 函数（事件名称，监听器）{
    如果（！事件名称 || ！监听器）{
      返回;
    }
    // 设置事件哈希
    var events = this._events = this._events || {};
    // 设置监听器数组
    var listeners = events[ eventName ] = events[ eventName ] || [];
    // 只添加一次
    if (listeners.indexOf(listener) == -1 ) {
      听众.push(听众);
    }
  
    返回这个；
  };
  
  proto.once = 函数（事件名称，监听器）{
    如果（！事件名称 || ！监听器）{
      返回;
    }
    // 添加事件
    this.on( eventName, listener );
    // 设置一次标志
    // 设置一次事件哈希
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // 设置 onceListeners 对象
    var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // 设置标志
    onceListeners[ 监听器 ] = true;
  
    返回这个；
  };
  
  proto.off = 函数（事件名称，监听器）{
    var listeners = this._events && this._events[ eventName ];
    如果 ( !listeners || !listeners.length ) {
      返回;
    }
    var index = listeners.indexOf(listener);
    如果（索引！= -1）{
      listeners.splice( index, 1 );
    }
  
    返回这个；
  };
  
  proto.emitEvent = 函数（事件名称，参数）{
    var listeners = this._events && this._events[ eventName ];
    如果 ( !listeners || !listeners.length ) {
      返回;
    }
    // 如果 .off() 在监听器中，则复制过来以避免干扰
    听众 = 听众.slice(0);
    args = args || [];
    // 一次
    var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( var i=0; i < listeners.length; i++ ) {
      var 监听器 = 监听器[i]
      var isOnce = onceListeners && onceListeners[ listener ];
      如果 ( isOnce ) {
        // 移除监听器
        // 在触发器之前删除以防止递归
        this.off( eventName, listener );
        // 取消设置一次标志
        删除一次监听器[监听器];
      }
      // 触发监听器
      listener.apply( this, args );
    }
  
    返回这个；
  };
  
  proto.allOff = 函数（）{
    删除 this._events;
    删除 this._onceEvents;
  };
  
  返回 EvEmitter；
  
  }));
  
  /*!
   * getSize v2.0.3
   * 测量元素的大小
   * 麻省理工学院执照
   */
  
  /* jshint 浏览器：true，strict：true，undef：true，未使用：true */
  /* 全局控制台：false */
  
  （功能（窗口，工厂）{
    /* jshint strict: false */ /* 全局定义，模块 */
    if ( typeofdefine == 'function' && define.amd ) {
      // 超微
      定义（'获取大小/获取大小'，工厂）；
    } else if ( typeof module == 'object' && module.exports ) {
      // 通用JS
      module.exports = factory();
    } 别的 {
      // 浏览器全局
      window.getSize = factory();
    }
  
  })( 窗口，函数工厂() {
  '使用严格';
  
  // -------------------------- 帮手 --------------------- ----- //
  
  // 从字符串中获取数字，而不是百分比
  函数 getStyleSize( 值 ) {
    var num = parseFloat( value );
    // 不是像“100%”这样的百分比，而是一个数字
    var isValid = value.indexOf('%') == -1 && !isNaN( num );
    返回 isValid && num;
  }
  
  函数 noop() {}
  
  var logError = typeof console == 'undefined' ? 无：
    功能（消息）{
      控制台错误（消息）；
    };
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  测量  -  -  -  -  -  -  -  -  -  - - ----- //
  
  var 测量值 = [
    '填充左',
    'paddingRight',
    'paddingTop',
    '填充底部',
    '左边距',
    'marginRight',
    '边距顶部',
    '边距底部',
    '边框左宽度',
    'borderRightWidth',
    '边框顶部宽度',
    '边框底部宽度'
  ];
  
  变量测量长度 = 测量长度；
  
  函数 getZeroSize() {
    变量大小 = {
      宽度：0，
      高度：0，
      内部宽度：0，
      内部高度：0，
      外宽度：0，
      外层高度：0
    };
    for ( var i=0; i <measurementLength; i++ ) {
      var 测量 = 测量 [i];
      尺寸[测量] = 0;
    }
    退货尺寸；
  }
  
  // -------------------------- getStyle ------------- ----- //
  
  /**
   * getStyle，获取元素的样式，检查 Firefox 错误
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  函数 getStyle( elem ) {
    var style = getComputedStyle( elem );
    如果（！风格）{
      logError('返回的样式' + 样式+
        '。您是否在 Firefox 上的隐藏 iframe 中运行此代码？' +
        '见 https://bit.ly/getsizebug1' );
    }
    返回样式；
  }
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  设置  -  -  -  -  -  -  -  -  -  - - ----- //
  
  var isSetup = false;
  
  var isBoxSizeOuter;
  
  /**
   * 设置
   * 检查 isBoxSizerOuter
   * 在第一个 getSize() 上做而不是在页面加载上做
   */
  功能设置（）{
    //设置一次
    如果 ( isSetup ) {
      返回;
    }
    isSetup = true;
  
    // -------------------------- 盒子尺寸 -------------------- ------ //
  
    /**
     * Chrome 和 Safari 在边框框元素上的 style.width 上测量外宽度
     * IE11 & Firefox<29 测量内宽
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = '边框框';
  
    var body = document.body || 文档.documentElement;
    body.appendChild(div);
    var style = getStyle( div );
    // 浏览器缩放的圆形值。德桑德罗/砖石#928
    isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;
  
    body.removeChild(div);
  }
  
  // -------------------------- getSize --------------------- ----- //
  
  函数 getSize( elem ) {
    设置（）;
  
    // 如果 elem 是字符串，则使用 querySeletor
    if ( typeof elem == 'string' ) {
      elem = document.querySelector( elem );
    }
  
    // 不要继续处理非对象
    if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
      返回;
    }
  
    var style = getStyle( elem );
  
    // 如果隐藏，一切都是 0
    if ( style.display == 'none' ) {
      返回 getZeroSize();
    }
  
    变量大小 = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;
  
    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
  
    // 获取所有测量值
    for ( var i=0; i <measurementLength; i++ ) {
      var 测量 = 测量 [i];
      var value = style[measurement];
      var num = parseFloat( value );
      // 任何 'auto', 'medium' 值为 0
      大小 [ 测量 ] = !isNaN( num ) ? 数量：0；
    }
  
    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
  
    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
  
    // 如果我们可以从样式中获取宽度和高度，则覆盖它
    var styleWidth = getStyleSize( style.width );
    if ( styleWidth !== false ) {
      size.width = styleWidth +
        // 添加填充和边框，除非它已经包含它
        ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
    }
  
    var styleHeight = getStyleSize( style.height );
    if ( styleHeight !== false ) {
      尺寸.高度 = 样式高度 +
        // 添加填充和边框，除非它已经包含它
        ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
    }
  
    size.innerWidth = size.width - ( paddingWidth + borderWidth );
    size.innerHeight = size.height - ( paddingHeight + borderHeight );
  
    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;
  
    退货尺寸；
  }
  
  返回获取大小；
  
  });
  
  /**
   * 匹配选择器 v2.0.2
   * 匹配选择器（元素，'.selector'）
   * 麻省理工学院执照
   */
  
  /*jshint 浏览器：true，strict：true，undef：true，未使用：true */
  
  （功能（窗口，工厂）{
    /*全局定义：假，模块：假*/
    '使用严格';
    // 通用模块定义
    if ( typeofdefine == 'function' && define.amd ) {
      // 超微
      定义（'desandro-matches-selector/matches-selector',factory）;
    } else if ( typeof module == 'object' && module.exports ) {
      // 通用JS
      module.exports = factory();
    } 别的 {
      // 浏览器全局
      window.matchesSelector = factory();
    }
  
  }( 窗口，函数工厂() {
    '使用严格';
  
    var matchMethod = ( function() {
      var ElemProto = window.Element.prototype;
      // 首先检查标准方法名称
      如果（ElemProto.matches）{
        返回“匹配”；
      }
      // 检查无前缀
      如果（ElemProto.matchesSelector）{
        返回“匹配选择器”；
      }
      // 检查供应商前缀
      var 前缀 = ['webkit', 'moz', 'ms', 'o'];
  
      for ( var i=0; i < prefixes.length; i++ ) {
        var 前缀 = 前缀 [i];
        var 方法 = 前缀 + 'MatchesSelector';
        如果（ElemProto[方法]）{
          返回方法；
        }
      }
    })();
  
    返回函数matchesSelector( elem, selector ) {
      返回 elem[ 匹配方法 ]( 选择器 );
    };
  
  }));
  
  /**
   * Fizzy UI utils v2.0.7
   * 麻省理工学院执照
   */
  
  /*jshint 浏览器：true，undef：true，未使用：true，严格：true */
  
  （功能（窗口，工厂）{
    // 通用模块定义
    /*jshint strict: false */ /*全局定义，模块，需要*/
  
    if ( typeofdefine == 'function' && define.amd ) {
      // 超微
      定义（'嘶嘶声-ui-utils/utils'，[
        'desandro-matches-selector/matches-selector'
      ], 函数（匹配选择器）{
        返回工厂（窗口，matchesSelector）；
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // 通用JS
      module.exports = 工厂（
        窗户，
        require('desandro-matches-selector')
      );
    } 别的 {
      // 浏览器全局
      window.fizzyUIUtils = factory(
        窗户，
        window.matchesSelector
      );
    }
  
  }( 窗口，函数工厂( 窗口，matchesSelector ) {
  
  
  
  var utils = {};
  
  //  -  - - 延长  -  - - //
  
  // 扩展对象
  utils.extend = 函数( a, b ) {
    for ( var prop in b ) {
      a[ 道具 ] = b[ 道具 ];
    }
    返回一个；
  };
  
  // ----- 取模 ----- //
  
  utils.modulo = 函数（数字，div）{
    返回 (( num % div ) + div ) % div;
  };
  
  // ----- makeArray ----- //
  
  var arraySlice = Array.prototype.slice;
  
  // 将元素或节点列表转为数组
  utils.makeArray = 函数（对象）{
    如果 ( Array.isArray( obj ) ) {
      // 如果已经是数组，则使用对象
      返回对象；
    }
    // 如果未定义或为空，则返回空数组。#6
    if ( obj === null || obj === undefined ) {
      返回 [];
    }
  
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    如果 ( isArrayLike ) {
      // 将节点列表转换为数组
      返回 arraySlice.call( obj );
    }
  
    // 单索引数组
    返回[对象]；
  };
  
  //  -  - - 从......中去除  -  - - //
  
  utils.removeFrom = function( ary, obj ) {
    var index = ary.indexOf( obj );
    如果（索引！= -1）{
      ary.splice( index, 1 );
    }
  };
  
  // ----- getParent ----- //
  
  utils.getParent = 函数（元素，选择器）{
    while ( elem.parentNode && elem != document.body ) {
      elem = elem.parentNode;
      如果（匹配选择器（元素，选择器））{
        返回元素；
      }
    }
  };
  
  // ----- getQueryElement ----- //
  
  // 使用元素作为选择器字符串
  utils.getQueryElement = 函数（元素）{
    if ( typeof elem == 'string' ) {
      返回 document.querySelector( elem );
    }
    返回元素；
  };
  
  // ----- handleEvent ----- //
  
  // 启用 .ontype 从 .addEventListener( elem, 'type' ) 触发
  utils.handleEvent = 函数（事件）{
    var 方法 = 'on' + event.type;
    如果（这个[方法]）{
      this[方法](事件);
    }
  };
  
  // ----- filterFindElements ----- //
  
  utils.filterFindElements = 函数（元素，选择器）{
    // 制作元素数组
    elems = utils.makeArray( elems );
    var ffElems = [];
  
    elems.forEach( 函数( elem ) {
      // 检查 elem 是否为实际元素
      如果 ( !( elem instanceof HTMLElement ) ) {
        返回;
      }
      // 如果没有选择器，则添加 elem
      如果（！选择器）{
        ffElems.push( elem );
        返回;
      }
      // 如果我们有选择器，则过滤和查找项目
      // 筛选
      如果（匹配选择器（元素，选择器））{
        ffElems.push( elem );
      }
      // 找到孩子
      var childElems = elem.querySelectorAll( selector );
      // 将 childElems 连接到 filterFound 数组
      for ( var i=0; i < childElems.length; i++ ) {
        ffElems.push(childElems[i]);
      }
    });
  
    返回 ffElems；
  };
  
  // ----- 去抖动方法 ----- //
  
  utils.debounceMethod = 函数（_class，methodName，阈值）{
    阈值 = 阈值 || 100;
    // 原始方法
    var method = _class.prototype[methodName];
    var timeoutName = methodName + '超时';
  
    _class.prototype[methodName] = function() {
      var timeout = this[ timeoutName ];
      clearTimeout(超时);
  
      var args = 参数；
      var _this = this;
      this[ timeoutName ] = setTimeout( function() {
        method.apply(_this, args);
        删除 _this[ timeoutName ];
      }， 临界点 ）;
    };
  };
  
  // ----- 文档就绪 ----- //
  
  utils.docReady = 函数（回调）{
    var readyState = document.readyState;
    if ( readyState == 'complete' || readyState == 'interactive' ) {
      // 执行异步以允许其他脚本运行。metafizzy/flickity#441
      设置超时（回调）；
    } 别的 {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };
  
  // ----- htmlInit ----- //
  
  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  utils.toDashed = 函数（ str ）{
    return str.replace( /(.)([AZ])/g, function( match, $1, $2 ) {
      返回 $1 + '-' + $2;
    }).toLowerCase();
  };
  
  var console = window.console;
  /**
   * 允许用户通过 [data-namespace] 或 .js-namespace 类初始化类
   * htmlInit( 小部件, 'widgetName' )
   * 选项从 data-namespace-options 解析
   */
  utils.htmlInit = 函数（小部件类，命名空间）{
    utils.docReady（函数（）{
      var dashedNamespace = utils.toDashed(namespace);
      var dataAttr = 'data-' + dashedNamespace;
      var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
      var elems = utils.makeArray( dataAttrElems )
        .concat(utils.makeArray(jsDashElems));
      var dataOptionsAttr = dataAttr + '-options';
      var jQuery = window.jQuery;
  
      elems.forEach( 函数( elem ) {
        var attr = elem.getAttribute( dataAttr ) ||
          elem.getAttribute( dataOptionsAttr );
        var 选项；
        尝试 {
          options = attr && JSON.parse( attr );
        } 捕捉（错误）{
          // 记录错误，不初始化
          如果（控制台）{
            console.error( '解析错误' + dataAttr + ' on ' + elem.className +
            ': ' + 错误 );
          }
          返回;
        }
        // 初始化
        var instance = new WidgetClass( elem, options );
        // 通过 $().data('namespace') 提供
        如果（jQuery）{
          jQuery.data( elem, namespace, instance );
        }
      });
  
    });
  };
  
  // ----- ----- //
  
  返回实用程序；
  
  }));
  
  /**
   * 外层项目
   */
  
  （功能（窗口，工厂）{
    // 通用模块定义
    /* jshint strict: false */ /* 全局定义，模块，需要 */
    if ( typeofdefine == 'function' && define.amd ) {
      // AMD - RequireJS
      定义（'外层/项目'，[
          '电子发射器/电子发射器',
          '获取大小/获取大小'
        ],
        工厂
      );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = 工厂（
        要求（'ev-发射器'），
        要求（'获取大小'）
      );
    } 别的 {
      // 浏览器全局
      窗口.外层 = {};
      window.Outlayer.Item = factory(
        窗口.EvEmitter，
        窗口.getSize
      );
    }
  
  }( 窗口，函数工厂( EvEmitter, getSize ) {
  '使用严格';
  
  // ----- 帮手 ----- //
  
  函数 isEmptyObj( obj ) {
    for ( var prop in obj ) {
      返回假；
    }
    道具 = 空；
    返回真；
  }
  
  // -------------------------- CSS3 支持-------------------- ------ //
  
  
  var docElemStyle = document.documentElement.style;
  
  var transitionProperty = typeof docElemStyle.transition == 'string' ?
    '过渡'：'WebkitTransition';
  var transformProperty = typeof docElemStyle.transform == 'string' ?
    '转换'：'WebkitTransform';
  
  var transitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    过渡：'过渡结束'
  }[ 过渡属性 ];
  
  // 缓存所有可能有供应商前缀的供应商属性
  var vendorProperties = {
    变换：变换属性，
    过渡：过渡属性，
    transitionDuration: transitionProperty + 'Duration',
    transitionProperty: transitionProperty + 'Property',
    过渡延迟：transitionProperty + '延迟'
  };
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  物品  -  -  -  -  -  -  -  -  -  - - ----- //
  
  功能项目（元素，布局）{
    如果（！元素）{
      返回;
    }
  
    this.element = 元素;
    // 父布局类，即 Masonry、Isotope 或 Packery
    this.layout = 布局；
    this.position = {
      x: 0,
      y：0
    };
  
    this._create();
  }
  
  // 继承 EvEmitter
  var proto = Item.prototype = Object.create( EvEmitter.prototype );
  proto.constructor = 项目;
  
  proto._create = 函数（）{
    // 过渡对象
    this._transn = {
      ingProperties：{}，
      干净的： {}，
      结束： {}
    };
  
    这个.css({
      位置：'绝对'
    });
  };
  
  // 为事件类型触发指定的处理程序
  proto.handleEvent = 函数（事件）{
    var 方法 = 'on' + event.type;
    如果（这个[方法]）{
      this[方法](事件);
    }
  };
  
  proto.getSize = 函数（）{
    this.size = getSize( this.element );
  };
  
  /**
   * 将 CSS 样式应用于元素
   * @param {Object} 样式
   */
  proto.css = 函数（样式）{
    var elemStyle = this.element.style;
  
    for ( var prop in style ) {
      // 如果可用，使用供应商属性
      var supportedProp = vendorProperties[prop] || 支柱;
      elemStyle[supportedProp] = style[prop];
    }
  };
  
   // 测量位置，并设置它
  proto.getPosition = 函数（）{
    var style = getComputedStyle( this.element );
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    var xValue = style[ isOriginLeft ? '左右' ];
    var yValue = 样式 [ isOriginTop ? '顶部'：'底部'];
    var x = parseFloat( xValue );
    var y = parseFloat( yValue );
    // 将百分比转换为像素
    var layoutSize = this.layout.size;
    if ( xValue.indexOf('%') != -1 ) {
      x = ( x / 100 ) * layoutSize.width;
    }
    如果 ( yValue.indexOf('%') != -1 ) {
      y = ( y / 100 ) * layoutSize.height;
    }
    // 清除 'auto' 或其他非整数值
    x = isNaN( x ) ? 0：x；
    y = isNaN( y ) ? 0 : y;
    // 从测量中删除填充
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ？layoutSize.paddingTop : layoutSize.paddingBottom;
  
    this.position.x = x;
    this.position.y = y;
  };
  
  // 设置固定位置，应用填充
  proto.layoutPosition = 函数（）{
    var layoutSize = this.layout.size;
    var 样式 = {};
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
  
    // X
    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
    var xProperty = isOriginLeft ? '左右';
    var xResetProperty = isOriginLeft ? '右左';
  
    var x = this.position.x + layoutSize[ xPadding ];
    // 设置百分比或像素
    style[ xProperty ] = this.getXValue( x );
    // 重置其他属性
    样式[ xResetProperty ] = '';
  
    // 是
    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
    var yProperty = isOriginTop ? '顶部'：'底部'；
    var yResetProperty = isOriginTop ? '底部'：'顶部';
  
    var y = this.position.y + layoutSize[yPadding];
    // 设置百分比或像素
    样式[ yProperty ] = this.getYValue( y );
    // 重置其他属性
    样式[yResetProperty] = '';
  
    this.css(样式);
    this.emitEvent('布局', [ this ] );
  };
  
  proto.getXValue = 函数( x ) {
    var isHorizo​​ntal = this.layout._getOption('horizo​​ntal');
    返回 this.layout.options.percentPosition && !isHorizo​​ntal ？
      ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
  };
  
  proto.getYValue = 函数( y ) {
    var isHorizo​​ntal = this.layout._getOption('horizo​​ntal');
    返回 this.layout.options.percentPosition && isHorizo​​ntal ？
      ( ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
  };
  
  proto._transitionTo = 函数( x, y ) {
    this.getPosition();
    // 从上/左获取当前的 x & y
    var curX = this.position.x;
    var curY = this.position.y;
  
    var didNotMove = x == this.position.x && y == this.position.y;
  
    // 保存结束位置
    this.setPosition( x, y );
  
    // 如果没有移动并且没有过渡，就去布局
    if ( didNotMove && !this.isTransitioning ) {
      this.layoutPosition();
      返回;
    }
  
    var transX = x - curX;
    var transY = y - curY;
    var transitionStyle = {};
    transitionStyle.transform = this.getTranslate( transX, transY );
  
    this.transition({
      到：过渡风格，
      onTransitionEnd：{
        转换：this.layoutPosition
      },
      isCleaning: 真
    });
  };
  
  proto.getTranslate = function( x, y ) {
    // 如果原点在右侧或底部，则翻转坐标
    var isOriginLeft = this.layout._getOption('originLeft');
    var isOriginTop = this.layout._getOption('originTop');
    x = isOriginLeft ? x : -x;
    y = isOriginTop ？y : -y;
    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
  };
  
  // 非过渡 + 变换支持
  proto.goTo = 函数( x, y ) {
    this.setPosition( x, y );
    this.layoutPosition();
  };
  
  proto.moveTo = proto._transitionTo;
  
  proto.setPosition = 函数( x, y ) {
    this.position.x = parseFloat( x );
    this.position.y = parseFloat(y);
  };
  
  //  -  - - 过渡  -  - - //
  
  /**
   * @param {Object} 样式 - CSS
   * @param {Function} onTransitionEnd
   */
  
  // 非过渡，只触发回调
  proto._nonTransition = 函数（参数）{
    this.css( args.to );
    如果（args.isCleaning）{
      this._removeStyles(args.to);
    }
    for ( var prop in args.onTransitionEnd ) {
      args.onTransitionEnd[ prop ].call( this );
    }
  };
  
  /**
   * 适当的过渡
   * @param {Object} args - 参数
   * @param {Object} to - 过渡到的样式
   * @param {Object} from - 开始过渡的样式
   * @param {Boolean} isCleaning - 过渡后移除过渡样式
   * @param {Function} onTransitionEnd - 回调
   */
  proto.transition = 函数（参数）{
    // 如果没有过渡持续时间，则重定向到 nonTransition
    如果（！parseFloat（this.layout.options.transitionDuration））{
      this._nonTransition( args );
      返回;
    }
  
    var _transition = this._transn;
    // 通过 css 属性跟踪 onTransitionEnd 回调
    for ( var prop in args.onTransitionEnd ) {
      _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
    }
    // 跟踪正在转换的属性
    for ( args.to 中的道具) {
      _transition.ingProperties[prop] = true;
      // 跟踪要在转换完成时清理的属性
      如果（args.isCleaning）{
        _transition.clean[prop] = true;
      }
    }
  
    // 从样式设置
    如果（args.from）{
      this.css( args.from );
      // 强制重绘。http://blog.alexmaccaw.com/css-transitions
      var h = this.element.offsetHeight;
      // 让 JSHint 隐藏未使用的 var
      h = 空；
    }
    // 启用过渡
    this.enableTransition( args.to );
    // 设置正在过渡的样式
    this.css( args.to );
  
    this.isTransitioning = true;
  
  };
  
  // 破折号在所有大写字母之前，包括第一个 for
  // WebkitTransform => -webkit-transform
  函数 toDashedAll( str ) {
    return str.replace( /([AZ])/g, function( $1 ) {
      返回 '​​-' + $1.toLowerCase();
    });
  }
  
  var transitionProps = 'opacity,' + toDashedAll(transformProperty);
  
  proto.enableTransition = function(/* 样式 */) {
    // HACK 在转换期间更改 transitionProperty
    // 会导致跳转跳转
    如果（this.isTransitioning）{
      返回;
    }
  
    // 从样式对象制作`transition: foo, bar, baz`
    // 当 enableTransition 可以工作时，HACK 取消注释
    // 当一个转换发生时
    // var transitionValues = [];
    // for ( var prop in style ) {
    // // dash-ify 像 WebkitTransition 这样的驼峰式属性
    // prop = vendorProperties[ prop ] || 支柱;
    // transitionValues.push( toDashedAll( prop ) );
    // }
    // 将数字转换为毫秒，以匹配交错
    var 持续时间 = this.layout.options.transitionDuration;
    持续时间 = typeof 持续时间 == 'number' ？持续时间 + 'ms' ：持续时间；
    // 启用过渡样式
    这个.css({
      过渡属性：过渡道具，
      transitionDuration：持续时间，
      过渡延迟：this.staggerDelay || 0
    });
    // 监听转换结束事件
    this.element.addEventListener( transitionEndEvent, this, false );
  };
  
  // ----- 事件 ----- //
  
  proto.onwebkitTransitionEnd = 函数（事件）{
    this.ontransitionend(事件);
  };
  
  proto.onotransitionend = 函数（事件）{
    this.ontransitionend(事件);
  };
  
  // 我为了让我的生活更轻松而修改的属性
  var dashedVendorProperties = {
    '-webkit-transform': '转换'
  };
  
  proto.ontransitionend = 函数（事件）{
    // 忽略来自孩子的冒泡事件
    if ( event.target !== this.element ) {
      返回;
    }
    var _transition = this._transn;
    // 获取过渡属性的属性名称，转换为无前缀
    var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;
  
    // 移除已经完成转换的属性
    删除 _transition.ingProperties[propertyName];
    // 检查是否有任何属性仍在转换
    如果（isEmptyObj（_transition.ingProperties））{
      // 所有属性都已完成转换
      this.disableTransition();
    }
    // 干净的风格
    如果（_transition.clean 中的属性名称）{
      // 清理样式
      this.element.style[ event.propertyName ] = '';
      删除 _transition.clean[propertyName];
    }
    // 触发 onTransitionEnd 回调
    如果（_transition.onEnd 中的属性名称）{
      var onTransitionEnd = _transition.onEnd[ propertyName ];
      onTransitionEnd.call( this );
      删除 _transition.onEnd[ propertyName ];
    }
  
    this.emitEvent('transitionEnd', [ this ] );
  };
  
  proto.disableTransition = 函数（）{
    this.removeTransitionStyles();
    this.element.removeEventListener( transitionEndEvent, this, false );
    this.isTransitioning = false;
  };
  
  /**
   * 从元素中删除样式属性
   * @param {Object} 样式
  **/
  proto._removeStyles = 函数（样式）{
    // 清理过渡样式
    var cleanStyle = {};
    for ( var prop in style ) {
      清洁风格[道具] = '';
    }
    this.css(cleanStyle);
  };
  
  var cleanTransitionStyle = {
    过渡属性：''，
    过渡期：''，
    过渡延迟：''
  };
  
  proto.removeTransitionStyles = function() {
    // 移除过渡
    this.css( cleanTransitionStyle );
  };
  
  // ----- 交错 ----- //
  
  proto.stagger = 函数（延迟）{
    延迟 = isNaN( 延迟 ) ? 0：延迟；
    this.staggerDelay = 延迟 + 'ms';
  };
  
  // ----- 显示/隐藏/删除 ----- //
  
  // 从 DOM 中删除元素
  proto.removeElem = 函数（）{
    this.element.parentNode.removeChild( this.element );
    // 移除显示：无
    this.css({ 显示: '' });
    this.emitEvent('remove', [this]);
  };
  
  proto.remove = 函数（）{
    // 如果没有过渡支持或没有过渡，则删除元素
    if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
      this.removeElem();
      返回;
    }
  
    // 开始过渡
    this.once( 'transitionEnd', function() {
      this.removeElem();
    });
    this.hide();
  };
  
  proto.reveal = function() {
    删除 this.isHidden;
    // 移除显示：无
    this.css({ 显示: '' });
  
    var 选项 = this.layout.options;
  
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
    onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;
  
    this.transition({
      来自：options.hiddenStyle，
      到：options.visibleStyle，
      isCleaning: 真,
      onTransitionEnd: onTransitionEnd
    });
  };
  
  proto.onRevealTransitionEnd = function() {
    // 检查是否仍然可见
    // 在过渡期间，项目可能已被隐藏
    如果（！this.isHidden）{
      this.emitEvent('揭示');
    }
  };
  
  /**
   * 获取用于隐藏/显示过渡结束的样式属性
   * @param {String} styleProperty - hiddenStyle/visibleStyle
   * @returns {String}
   */
  proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
    var optionStyle = this.layout.options[ styleProperty ];
    // 使用不透明度
    如果（optionStyle.opacity）{
      返回“不透明度”；
    }
    // 获取第一个属性
    for ( var prop in optionStyle ) {
      返回道具；
    }
  };
  
  proto.hide = 函数（）{
    // 设置标志
    this.isHidden = true;
    // 移除显示：无
    this.css({ 显示: '' });
  
    var 选项 = this.layout.options;
  
    var onTransitionEnd = {};
    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
    onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;
  
    this.transition({
      来自：options.visibleStyle，
      到：options.hiddenStyle，
      // 隐藏隐藏的东西
      isCleaning: 真,
      onTransitionEnd: onTransitionEnd
    });
  };
  
  proto.onHideTransitionEnd = 函数（）{
    // 检查是否仍然隐藏
    // 在过渡期间，项目可能已被取消隐藏
    如果（this.isHidden）{
      this.css({ display: 'none' });
      this.emitEvent('隐藏');
    }
  };
  
  proto.destroy = 函数（）{
    这个.css({
      位置： ''，
      剩下： ''，
      正确的： ''，
      最佳： ''，
      底部： ''，
      过渡： ''，
      转换： ''
    });
  };
  
  归还物品;
  
  }));
  
  /*!
   * 外层 v2.1.1
   * 布局库的大脑和胆量
   * 麻省理工学院执照
   */
  
  （功能（窗口，工厂）{
    '使用严格';
    // 通用模块定义
    /* jshint strict: false */ /* 全局定义，模块，需要 */
    if ( typeofdefine == 'function' && define.amd ) {
      // AMD - RequireJS
      定义（'外层/外层'，[
          '电子发射器/电子发射器',
          '获取大小/获取大小',
          'fizzy-ui-utils/utils',
          '。/物品'
        ],
        功能（EvEmitter，getSize，utils，项目）{
          返回工厂（窗口，EvEmitter，getSize，utils，Item）；
        }
      );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = 工厂（
        窗户，
        要求（'ev-发射器'），
        要求（'获取大小'），
        需要（'fizzy-ui-utils'），
        要求（'./项目'）
      );
    } 别的 {
      // 浏览器全局
      window.Outlayer = factory(
        窗户，
        窗口.EvEmitter，
        window.getSize,
        window.fizzyUIUtils,
        窗口.外层.项目
      );
    }
  
  }（窗口，函数工厂（窗口，EvEmitter，getSize，utils，Item）{
  '使用严格';
  
  // ----- 变量 ----- //
  
  var console = window.console;
  var jQuery = window.jQuery;
  var noop = function() {};
  
  // -------------------------- 外层 --------------------- ----- //
  
  // 全局唯一标识符
  变量 GUID = 0;
  // 所有外层实例的内部存储
  var 实例 = {};
  
  
  /**
   * @param {Element, String} 元素
   * @param {Object} 选项
   * @构造函数
   */
  功能外层（元素，选项）{
    var queryElement = utils.getQueryElement( element );
    如果（！查询元素）{
      如果（控制台）{
        console.error( '坏元素' + this.constructor.namespace +
          ': ' + ( queryElement || element ) );
      }
      返回;
    }
    this.element = queryElement;
    // 添加 jQuery
    如果（jQuery）{
      this.$element = jQuery( this.element );
    }
  
    // 选项
    this.options = utils.extend( {}, this.constructor.defaults );
    this.option( 选项 );
  
    // 为 Outlayer.getFromElement 添加 id
    var id = ++GUID;
    this.element.outlayerGUID = id; // 展开
    实例[id] = 这个；// 通过 id 关联
  
    // 踢掉它
    this._create();
  
    var isInitLayout = this._getOption('initLayout');
    如果（isInitLayout）{
      this.layout();
    }
  }
  
  // 设置仅供内部使用
  外层.namespace = '外层';
  Outlayer.Item = Item;
  
  // 默认选项
  Outlayer.defaults = {
    容器样式：{
      位置：'相对'
    },
    initLayout: 真,
    原点左：真实，
    原点顶部：真实，
    调整大小：真实，
    调整大小容器：真，
    // 项目选项
    过渡持续时间：'0.4s'，
    隐藏样式：{
      不透明度：0，
      变换：'比例（0.001）'
    },
    可见样式：{
      不透明度：1，
      变换：'比例（1）'
    }
  };
  
  var proto = Outlayer.prototype;
  // 继承 EvEmitter
  utils.extend(proto, EvEmitter.prototype);
  
  /**
   * 设置选项
   * @param {Object} 选项
   */
  proto.option = function( opts ) {
    utils.extend( this.options, opts );
  };
  
  /**
   * 获取向后兼容的选项值，检查旧名称
   */
  proto._getOption = 函数（选项）{
    var oldOption = this.constructor.compatOptions[ option ];
    返回 oldOption && this.options[ oldOption ] !== undefined ?
      this.options[ oldOption ] : this.options[ option ];
  };
  
  Outlayer.compatOptions = {
    // 当前名称：旧名称
    initLayout: 'isInitLayout',
    水平：'isHorizo​​ntal'，
    layoutInstant: 'isLayoutInstant',
    originLeft: 'isOriginLeft',
    originTop: 'isOriginTop',
    调整大小：'isResizeBound'，
    resizeContainer: 'isResizingContainer'
  };
  
  proto._create = 函数（）{
    // 从孩子那里获取物品
    this.reloadItems();
    // 影响布局但未布局的元素
    this.stamps = [];
    this.stamp( this.options.stamp );
    // 设置容器样式
    utils.extend( this.element.style, this.options.containerStyle );
  
    //绑定resize方法
    var canBindResize = this._getOption('resize');
    如果（canBindResize）{
      this.bindResize();
    }
  };
  
  // 再次遍历所有孩子并按正确顺序获取砖块
  proto.reloadItems = function() {
    // item元素的集合
    this.items = this._itemize( this.element.children );
  };
  
  
  /**
   * 将元素转化为 Outlayer.Items 用于布局
   * @param {Array 或 NodeList 或 HTMLElement} 元素
   * @returns {Array} items - 新外层项的集合
   */
  proto._itemize = 函数（元素）{
  
    var itemElems = this._filterFindItemElements(elems);
    var Item = this.constructor.Item;
  
    // 为集合创建新的外层项目
    var 项目 = [];
    for ( var i=0; i < itemElems.length; i++ ) {
      var elem = itemElems[i];
      var item = new Item( elem, this );
      项目.push(项目);
    }
  
    退换货品;
  };
  
  /**
   * 获取要在布局中使用的项目元素
   * @param {Array 或 NodeList 或 HTMLElement} 元素
   * @returns {Array} items - item 元素
   */
  proto._filterFindItemElements = 函数（元素）{
    返回 utils.filterFindElements(elems, this.options.itemSelector);
  };
  
  /**
   * 获取item元素的getter方法
   * @returns {Array} elems - 项目元素的集合
   */
  proto.getItemElements = function() {
    返回 this.items.map( function( item ) {
      返回 item.element;
    });
  };
  
  // ----- 初始化和布局 ----- //
  
  /**
   * 列出所有项目
   */
  proto.layout = function() {
    this._resetLayout();
    this._manageStamps();
  
    // 不要为第一个布局设置动画
    var layoutInstant = this._getOption('layoutInstant');
    var isInstant = layoutInstant !== undefined ?
      layoutInstant : !this._isLayoutInited;
    this.layoutItems( t​​his.items, isInstant );
  
    // 初始化标志
    this._isLayoutInited = true;
  };
  
  // _init 是布局的别名
  proto._init = proto.layout;
  
  /**
   * 任何新布局之前的逻辑
   */
  proto._resetLayout = 函数（）{
    this.getSize();
  };
  
  
  proto.getSize = 函数（）{
    this.size = getSize( this.element );
  };
  
  /**
   * 从选项中获取测量值，用于 columnWidth、rowHeight、gutter
   * 如果选项是字符串 -> 从选择器字符串中获取元素，& 获取元素的大小
   * 如果选项是 Element -> 获取元素的大小
   * 否则使用选项作为数字
   *
   * @param {String} 测量
   * @param {String} 大小 - 宽度或高度
   * @私人的
   */
  proto._getMeasurement = 函数（测量，大小）{
    var option = this.options[measurement];
    变种元素；
    如果（！选项）{
      // 默认为 0
      这[测量] = 0;
    } 别的 {
      // 使用选项作为元素
      if ( typeof option == 'string' ) {
        elem = this.element.querySelector( option );
      } else if ( option instanceof HTMLElement ) {
        elem = 选项；
      }
      // 使用元素的大小，如果元素
      这 [ 测量 ] = elem ? getSize( elem )[ size ] : 选项;
    }
  };
  
  /**
   * 布局项目元素的集合
   * @api 公开
   */
  proto.layoutItems = 函数（项目，isInstant）{
    items = this._getItemsForLayout( items );
  
    this._layoutItems( items, isInstant );
  
    this._postLayout();
  };
  
  /**
   * 获取要布置的项目
   * 您可能想跳过某些项目
   * @param {Array} 项
   * @returns {Array} 项
   */
  proto._getItemsForLayout = 函数（项目）{
    返回 items.filter( function( item ) {
      返回 !item.isIgnored;
    });
  };
  
  /**
   * 布局项目
   * @param {Array} 项
   * @param {Boolean} isInstant
   */
  proto._layoutItems = function( items, isInstant ) {
    this._emitCompleteOnItems('layout', items);
  
    如果 ( !items || !items.length ) {
      // 没有项目，用空数组发出事件
      返回;
    }
  
    var 队列 = [];
  
    items.forEach(函数(项目){
      // 从方法中获取 x/y 对象
      var position = this._getItemLayoutPosition( item );
      // 入队
      position.item = 项目；
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(位置);
    }， 这 ）;
  
    this._processLayoutQueue(队列);
  };
  
  /**
   * 获取项目布局位置
   * @param {Outlayer.Item} 项目
   * @returns {Object} x 和 y 位置
   */
  proto._getItemLayoutPosition = function( /* 项目 */ ) {
    返回 {
      x: 0,
      y：0
    };
  };
  
  /**
   * 迭代数组并定位每个项目
   * 原因是 - 分离此逻辑可防止“布局失效”
   * 谢谢@paul_irish
   * @param {Array} 队列
   */
  proto._processLayoutQueue = 函数（队列）{
    this.updateStagger();
    queue.forEach( 函数( obj, i ) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }， 这 ）;
  };
  
  // 以毫秒为单位从选项中设置交错
  proto.updateStagger = 函数（）{
    var stagger = this.options.stagger;
    if ( 交错 === null || 交错 === 未定义 ) {
      this.stagger = 0;
      返回;
    }
    this.stagger = getMilliseconds( stagger );
    返回 this.stagger;
  };
  
  /**
   * 设置项目在 DOM 中的位置
   * @param {Outlayer.Item} 项目
   * @param {Number} x - 水平位置
   * @param {Number} y - 垂直位置
   * @param {Boolean} isInstant - 禁用过渡
   */
  proto._positionItem = function( item, x, y, isInstant, i ) {
    如果（是即时的）{
      // 如果不是过渡，只需设置 CSS
      item.goTo( x, y );
    } 别的 {
      item.stagger( i * this.stagger );
      item.moveTo( x, y );
    }
  };
  
  /**
   * 每次布局后您想执行的任何逻辑，
   * 即容器的大小
   */
  proto._postLayout = 函数（）{
    this.resizeContainer();
  };
  
  proto.resizeContainer = 函数（）{
    var isResizingContainer = this._getOption('resizeContainer');
    如果（！isResizingContainer）{
      返回;
    }
    var size = this._getContainerSize();
    如果（大小）{
      this._setContainerMeasure( size.width, true );
      this._setContainerMeasure( size.height, false );
    }
  };
  
  /**
   * 如果返回，则设置容器的宽度或高度
   * @returns {Object} 大小
   * @param {Number} 宽度
   * @param {Number} 高度
   */
  proto._getContainerSize = noop;
  
  /**
   * @param {Number} measure - 宽度或高度的大小
   * @param {Boolean} isWidth
   */
  proto._setContainerMeasure = 函数（测量，isWidth）{
    如果（措施 === 未定义）{
      返回;
    }
  
    var elemSize = this.size;
    // 如果边框框添加填充和边框宽度
    如果（ elemSize.isBorderBox ）{
      测量 += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
        elemSize.borderLeftWidth + elemSize.borderRightWidth ：
        elemSize.paddingBottom + elemSize.paddingTop +
        elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }
  
    measure = Math.max( measure, 0 );
    this.element.style[ isWidth ? 'width' : 'height'] = 度量 + 'px';
  };
  
  /**
   * 在项目事件集合上发出 eventComplete
   * @param {String} 事件名称
   * @param {Array} 项目 - Outlayer.Items
   */
  proto._emitCompleteOnItems = 函数（事件名称，项目）{
    var _this = this;
    函数 onComplete() {
      _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
    }
  
    var count = items.length;
    如果 ( !items || !count ) {
      onComplete();
      返回;
    }
  
    var doneCount = 0;
    功能滴答（）{
      doneCount++;
      如果（完成计数 == 计数）{
        onComplete();
      }
    }
  
    // 绑定回调
    items.forEach(函数(项目){
      item.once( eventName, tick );
    });
  };
  
  /**
   * 通过 EvEmitter 和 jQuery 事件发出事件
   * @param {String} 类型 - 事件名称
   * @param {Event} 事件 - 原始事件
   * @param {Array} args - 额外的参数
   */
  proto.dispatchEvent = 函数（类型，事件，参数）{
    // 将原始事件添加到参数
    变量发射参数 = 事件？[事件].concat( args ) : args;
    this.emitEvent( 类型，emitArgs );
  
    如果（jQuery）{
      // 设置 this.$element
      this.$element = this.$element || jQuery( this.element );
      如果（事件）{
        // 创建 jQuery 事件
        var $event = jQuery.Event(事件);
        $event.type = 类型；
        this.$element.trigger( $event, args );
      } 别的 {
        // 如果没有可用的事件，只用类型触发
        this.$element.trigger( type, args );
      }
    }
  };
  
  // -------------------------- 忽略和标记 ----------- ------- //
  
  
  /**
   * 收藏物品，但不要摆放
   * 忽略的项目不会在布局中被跳过
   * @param {Element} 元素
   */
  proto.ignore = 函数（元素）{
    var item = this.getItem( elem );
    如果（项目）{
      item.isIgnored = true;
    }
  };
  
  /**
   * 将项目返回到布局集合
   * @param {Element} 元素
   */
  proto.unignore = 函数（元素）{
    var item = this.getItem( elem );
    如果（项目）{
      删除 item.isIgnored;
    }
  };
  
  /**
   * 为邮票添加元素
   * @param {NodeList、Array、Element 或 String} 元素
   */
  proto.stamp = 函数（元素）{
    elems = this._find( elems );
    如果（！元素）{
      返回;
    }
  
    this.stamps = this.stamps.concat( elems );
    // 忽略
    elems.forEach(this.ignore, this);
  };
  
  /**
   * 删除元素到邮票
   * @param {NodeList, Array, or Element} 元素
   */
  proto.unstamp = 函数（元素）{
    elems = this._find( elems );
    如果（！元素）{
      返回;
    }
  
    elems.forEach( 函数( elem ) {
      // 过滤掉移除的图章元素
      utils.removeFrom( this.stamps, elem );
      this.unignore( elem );
    }， 这 ）;
  };
  
  /**
   * 查找子元素
   * @param {NodeList、Array、Element 或 String} 元素
   * @returns {Array} 元素
   */
  proto._find = 函数（元素）{
    如果（！元素）{
      返回;
    }
    // 如果是字符串，使用参数作为选择器字符串
    if ( typeof elems == 'string' ) {
      elems = this.element.querySelectorAll( elems );
    }
    elems = utils.makeArray( elems );
    返回元素；
  };
  
  proto._manageStamps = 函数（）{
    如果 ( !this.stamps || !this.stamps.length ) {
      返回;
    }
  
    this._getBoundingRect();
  
    this.stamps.forEach( this._manageStamp, this );
  };
  
  // 更新 boundingLeft / Top
  proto._getBoundingRect = 函数（）{
    // 获取容器元素的边界矩形
    var boundingRect = this.element.getBoundingClientRect();
    var size = this.size;
    this._boundingRect = {
      左：boundingRect.left + size.paddingLeft + size.borderLeftWidth，
      顶部：boundingRect.top + size.paddingTop + size.borderTopWidth，
      右： boundingRect.right - （ size.paddingRight + size.borderRightWidth ），
      底部： boundingRect.bottom - （ size.paddingBottom + size.borderBottomWidth ）
    };
  };
  
  /**
   * @param {Element} 戳
  **/
  proto._manageStamp = noop;
  
  /**
   * 获取元素相对于容器元素的 x/y 位置
   * @param {Element} 元素
   * @returns {Object} 偏移量 - 有左、上、右、下
   */
  proto._getElementOffset = 函数（元素）{
    var boundingRect = elem.getBoundingClientRect();
    var thisRect = this._boundingRect;
    var size = getSize( elem );
    无功偏移= {
      左：boundingRect.left - thisRect.left - size.marginLeft，
      顶部：boundingRect.top - thisRect.top - size.marginTop，
      右：thisRect.right - boundingRect.right - size.marginRight，
      底部：thisRect.bottom - boundingRect.bottom - size.marginBottom
    };
    返回偏移量；
  };
  
  // -------------------------- 调整大小 ------------- ----- //
  
  // 为侦听器启用事件处理程序
  // 即调整大小 -> onresize
  proto.handleEvent = utils.handleEvent;
  
  /**
   * 将布局绑定到窗口大小调整
   */
  proto.bindResize = 函数（）{
    window.addEventListener('resize', this);
    this.isResizeBound = true;
  };
  
  /**
   * 将布局解除绑定到窗口大小调整
   */
  proto.unbindResize = 函数（）{
    window.removeEventListener('resize', this);
    this.isResizeBound = false;
  };
  
  proto.onresize = 函数（）{
    this.resize();
  };
  
  utils.debounceMethod(外层，'onresize'，100);
  
  proto.resize = function() {
    // 如果大小没有改变，则不触发
    // 或者如果调整大小未绑定。见#9
    如果 ( !this.isResizeBound || !this.needsResizeLayout() ) {
      返回;
    }
  
    this.layout();
  };
  
  /**
   * 检查布局是否需要发布布局
   * @returns 布尔值
   */
  proto.needsResizeLayout = 函数（）{
    var size = getSize( this.element );
    // 检查 this.size 和 size 是否存在
    // IE8 会在主体尺寸变化时触发调整大小，因此它们可能不会
    var hasSizes = this.size && size;
    返回 hasSizes && size.innerWidth !== this.size.innerWidth;
  };
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  方法  -  -  -  -  -  -  -  -  -  - - ----- //
  
  /**
   * 将项目添加到外层实例
   * @param {Array 或 NodeList 或 Element} 元素
   * @returns {Array} 项 - Outlayer.Items
  **/
  proto.addItems = 函数（元素）{
    var items = this._itemize(elems);
    // 将项目添加到集合中
    如果（项目。长度）{
      this.items = this.items.concat(items);
    }
    退换货品;
  };
  
  /**
   * 布局新添加的项目元素
   * @param {Array 或 NodeList 或 Element} 元素
   */
  proto.appended = 函数（元素）{
    var items = this.addItems( elems );
    如果（！items.length）{
      返回;
    }
    // 布局并只显示新项目
    this.layoutItems( items, true );
    this.reveal(items);
  };
  
  /**
   * 布局前置元素
   * @param {Array 或 NodeList 或 Element} 元素
   */
  proto.prepended = 函数（元素）{
    var items = this._itemize(elems);
    如果（！items.length）{
      返回;
    }
    // 将项目添加到集合的开头
    var previousItems = this.items.slice(0);
    this.items = items.concat( previousItems );
    // 开始新的布局
    this._resetLayout();
    this._manageStamps();
    // 在没有过渡的情况下布局新的东西
    this.layoutItems( items, true );
    this.reveal(items);
    // 布局之前的项目
    this.layoutItems(previousItems);
  };
  
  /**
   * 显示一组物品
   * @param {Array of Outlayer.Items} 项
   */
  proto.reveal = 函数（项目）{
    this._emitCompleteOnItems('reveal', items);
    如果 ( !items || !items.length ) {
      返回;
    }
    var stagger = this.updateStagger();
    items.forEach( function( item, i ) {
      item.stagger( i * stagger );
      item.reveal();
    });
  };
  
  /**
   * 隐藏项目集合
   * @param {Array of Outlayer.Items} 项
   */
  proto.hide = 函数（项目）{
    this._emitCompleteOnItems('隐藏', 物品);
    如果 ( !items || !items.length ) {
      返回;
    }
    var stagger = this.updateStagger();
    items.forEach( function( item, i ) {
      item.stagger( i * stagger );
      item.hide();
    });
  };
  
  /**
   * 显示项目元素
   * @param {Array}, {Element}, {NodeList} 项
   */
  proto.revealItemElements = 函数（元素）{
    var items = this.getItems(elems);
    this.reveal(items);
  };
  
  /**
   * 隐藏项目元素
   * @param {Array}, {Element}, {NodeList} 项
   */
  proto.hideItemElements = 函数（元素）{
    var items = this.getItems(elems);
    this.hide(项目);
  };
  
  /**
   * 获取 Outlayer.Item，给定一个 Element
   * @param {Element} 元素
   * @param {Function} 回调
   * @returns {Outlayer.Item} 项目
   */
  proto.getItem = 函数（元素）{
    // 遍历项目以获取匹配的项目
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      if ( item.element == elem ) {
        // 归还物品
        归还物品;
      }
    }
  };
  
  /**
   * 获取 Outlayer.Items 的集合，给定元素
   * @param {Array} 元素
   * @returns {Array} 项 - Outlayer.Items
   */
  proto.getItems = 函数（元素）{
    elems = utils.makeArray( elems );
    var 项目 = [];
    elems.forEach( 函数( elem ) {
      var item = this.getItem( elem );
      如果（项目）{
        项目.push(项目);
      }
    }， 这 ）;
  
    退换货品;
  };
  
  /**
   * 从实例和 DOM 中删除元素
   * @param {Array 或 NodeList 或 Element} 元素
   */
  proto.remove = 函数（元素）{
    var removeItems = this.getItems( elems );
  
    this._emitCompleteOnItems('remove', removeItems);
  
    // 如果没有要删除的项目，则保释
    如果 ( !removeItems || !removeItems.length ) {
      返回;
    }
  
    removeItems.forEach（函数（项目）{
      item.remove();
      // 从集合中删除项目
      utils.removeFrom( this.items, item );
    }， 这 ）;
  };
  
  //  -  - - 破坏  -  - - //
  
  // 移除并禁用 Outlayer 实例
  proto.destroy = 函数（）{
    // 清理动态样式
    var style = this.element.style;
    style.height = '';
    style.position = '';
    style.width = '';
    // 销毁物品
    this.items.forEach(函数(项目){
      item.destroy();
    });
  
    this.unbindResize();
  
    var id = this.element.outlayerGUID;
    删除实例[id]; // 通过 id 删除对实例的引用
    删除 this.element.outlayerGUID;
    // 删除 jQuery 的数据
    如果（jQuery）{
      jQuery.removeData( this.element, this.constructor.namespace );
    }
  
  };
  
  //  -  -  -  -  -  -  -  -  -  -  -  -  -  数据  -  -  -  -  -  -  -  -  -  - - ----- //
  
  /**
   * 从元素获取外层实例
   * @param {Element} 元素
   * @returns {外层}
   */
  Outlayer.data = 函数（元素）{
    elem = utils.getQueryElement( elem );
    var id = elem && elem.outlayerGUID;
    返回 id && 实例[ id ];
  };
  
  
  // -------------------------- 创建外层类 ----------- ------- //
  
  /**
   * 创建一个布局类
   * @param {String} 命名空间
   */
  Outlayer.create = 函数（命名空间，选项）{
    //子类外层
    var Layout = subclass(外层);
    // 应用新选项和 compatOptions
    Layout.defaults = utils.extend( {}, Outlayer.defaults );
    utils.extend( Layout.defaults, options );
    Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions );
  
    Layout.namespace = 命名空间；
  
    Layout.data = 外层数据；
  
    // 子类项目
    Layout.Item = subclass( Item );
  
    // -------------------------- 声明式 --------------------- ----- //
  
    utils.htmlInit( 布局, 命名空间);
  
    // -------------------------- jQuery 桥 ----------------- ------ //
  
    // 制作成 jQuery 插件
    如果（jQuery && jQuery.bridget）{
      jQuery.bridget( 命名空间, 布局 );
    }
  
    返回布局；
  };
  
  函数子类（父类）{
    函数子类（）{
      Parent.apply( this, arguments );
    }
  
    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;
  
    返回子类；
  }
  
  // ----- 帮手 ----- //
  
  // 每个单位有多少毫秒
  var msUnits = {
    女士: 1,
    秒：1000
  };
  
  // 将类似时间的参数转换为毫秒数
  // '0.4s' -> 40
  函数 getMilliseconds( 时间 ) {
    if ( typeof time == 'number' ) {
      回程时间；
    }
    var 匹配 = time.match( /(^\d*\.?\d*)(\w*)/ );
    var num = 匹配&& 匹配[1];
    var unit = 匹配&& 匹配[2];
    如果（！num.length）{
      返回0；
    }
    num = parseFloat( num );
    var mult = msUnits[单位] || 1;
    返回数量 * 多；
  }
  
  // ----- 鳍 ----- //
  
  // 返回全局
  Outlayer.Item = Item;
  
  返回外层；
  
  }));
  
  /*!
   * 砌体 v4.2.2
   * 级联网格布局库
   * https://masonry.desandro.com
   * 麻省理工学院许可证
   * 大卫·德桑德罗
   */
  
  （功能（窗口，工厂）{
    // 通用模块定义
    /* jshint strict: false */ /*全局定义，模块，需要*/
    if ( typeofdefine == 'function' && define.amd ) {
      // 超微
      定义（ [
          '外层/外层',
          '获取大小/获取大小'
        ],
        工厂 ）;
    } else if ( typeof module == 'object' && module.exports ) {
      // 通用JS
      module.exports = 工厂（
        要求（'外层'），
        要求（'获取大小'）
      );
    } 别的 {
      // 浏览器全局
      window.Masonry = factory(
        窗口。外层，
        窗口.getSize
      );
    }
  
  }（窗口，函数工厂（外层，getSize）{
  
  
  
  // -------------------------- masonryDefinition ------------- ----- //
  
    // 创建一个外层布局类
    var Masonry = Outlayer.create('masonry');
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = 'isFitWidth';
  
    var proto = Masonry.prototype;
  
    proto._resetLayout = 函数（）{
      this.getSize();
      this._getMeasurement('columnWidth', 'outerWidth');
      this._getMeasurement('gutter', 'outerWidth');
      this.measureColumns();
  
      // 重置 Y 列
      this.colYs = [];
      for ( var i=0; i < this.cols; i++ ) {
        this.colYs.push(0);
      }
  
      this.maxY = 0;
      this.horizo​​ntalColIndex = 0;
    };
  
    proto.measureColumns = function() {
      this.getContainerWidth();
      // 如果 columnWidth 为 0，则默认为第一项的外层宽度
      如果（！this.columnWidth）{
        var firstItem = this.items[0];
        var firstItemElem = firstItem && firstItem.element;
        // columnWidth 回退到第一个元素的 item
        this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
          // 如果第一个元素没有宽度，默认为容器的大小
          this.containerWidth;
      }
  
      var columnWidth = this.columnWidth += this.gutter;
  
      // 计算列
      var containerWidth = this.containerWidth + this.gutter;
      var cols = containerWidth / columnWidth;
      // 修复舍入错误，通常使用装订线
      var 过量 = columnWidth - containerWidth % columnWidth;
      // 如果过冲小于一个像素，则向上舍入，否则将其降低
      var mathMethod = 多余 && 多余 < 1 ? '圆形'：'地板';
      cols = Math[mathMethod](cols);
      this.cols = Math.max( cols, 1 );
    };
  
    proto.getContainerWidth = function() {
      // 如果适合宽度，容器是父容器
      var isFitWidth = this._getOption('fitWidth');
      var 容器 = isFitWidth ? this.element.parentNode : this.element;
      // 检查 this.size 和 size 是否存在
      // IE8 会在主体尺寸变化时触发调整大小，因此它们可能不会
      var size = getSize(容器);
      this.containerWidth = size && size.innerWidth;
    };
  
    proto._getItemLayoutPosition = 函数（项目）{
      item.getSize();
      // 这个砖跨越多少列
      var 余数 = item.size.outerWidth % this.columnWidth;
      var mathMethod = 余数 && 余数 < 1 ? '圆形'：'细胞';
      // 舍入 1 个像素，否则使用 ceil
      var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
      colSpan = Math.min( colSpan, this.cols );
      // 使用水平或顶列位置
      var colPosMethod = this.options.horizo​​ntalOrder ？
        '_getHorizo​​ntalColPosition': '_getTopColPosition';
      var colPosition = this[ colPosMethod ]( colSpan, item );
      // 放置砖块
      变量位置 = {
        x: this.columnWidth * colPosition.col,
        y：colPosition.y
      };
      // 将 setHeight 应用于必要的列
      var setHeight = colPosition.y + item.size.outerHeight;
      var setMax = colSpan + colPosition.col;
      for ( var i = colPosition.col; i < setMax; i++ ) {
        this.colYs[i] = setHeight;
      }
  
      返回位置；
    };
  
    proto._getTopColPosition = 函数（colSpan）{
      var colGroup = this._getTopColGroup( colSpan );
      // 从列中获取最小的 Y 值
      var minimumY = Math.min.apply( Math, colGroup );
  
      返回 {
        col: colGroup.indexOf( minimumY ),
        y：最小值Y，
      };
    };
  
    /**
     * @param {Number} colSpan - 元素跨越的列数
     * @returns {Array} colGroup
     */
    proto._getTopColGroup = 函数（colSpan）{
      如果 ( colSpan < 2 ) {
        // 如果砖只跨越一列，则使用所有的 Y 列
        返回 this.colYs;
      }
  
      var colGroup = [];
      // 这块砖可以水平放置多少个不同的地方
      var groupCount = this.cols + 1 - colSpan;
      // 对于每组潜在的水平位置
      for ( var i = 0; i < groupCount; i++ ) {
        colGroup[i] = this._getColGroupY( i, colSpan );
      }
      返回 colGroup;
    };
  
    proto._getColGroupY = 函数（col，colSpan）{
      如果 ( colSpan < 2 ) {
        返回 this.colYs[col];
      }
      // 为该组创建一个 colY 值数组
      var groupColYs = this.colYs.slice( col, col + colSpan );
      // 并获取数组的最大值
      返回 Math.max.apply( Math, groupColYs );
    };
  
    // 根据水平索引获取列位置。第873章
    proto._getHorizo​​ntalColPosition = 函数（colSpan，项目）{
      var col = this.horizo​​ntalColIndex % this.cols;
      var isOver = colSpan > 1 && col + colSpan > this.cols;
      // 如果当前行无法容纳项目，则移至下一行
      col = isOver ？0 : 列;
      // 不要让零尺寸的项目占用空间
      var hasSize = item.size.outerWidth && item.size.outerHeight;
      this.horizo​​ntalColIndex = hasSize ？col + colSpan : this.horizo​​ntalColIndex;
  
      返回 {
        上校：上校，
        y: this._getColGroupY( col, colSpan ),
      };
    };
  
    proto._manageStamp = 函数（邮票）{
      var stampSize = getSize(邮票);
      var offset = this._getElementOffset(stamp);
      // 获取此戳影响的列
      var isOriginLeft = this._getOption('originLeft');
      var firstX = isOriginLeft ? offset.left : offset.right;
      var lastX = firstX + stampSize.outerWidth;
      var firstCol = Math.floor( firstX / this.columnWidth );
      firstCol = Math.max( 0, firstCol );
      var lastCol = Math.floor( lastX / this.columnWidth );
      // 如果是 columnWidth 的倍数，则 lastCol 不应超过 #425
      lastCol -= lastX % this.columnWidth ？0 : 1;
      lastCol = Math.min( this.cols - 1, lastCol );
      // 将 colYs 设置为图章的底部
  
      var isOriginTop = this._getOption('originTop');
      var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
        邮票尺寸.outerHeight;
      for ( var i = firstCol; i <= lastCol; i++ ) {
        this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
      }
    };
  
    proto._getContainerSize = 函数（）{
      this.maxY = Math.max.apply( Math, this.colYs );
      变量大小 = {
        高度：this.maxY
      };
  
      if ( this._getOption('fitWidth') ) {
        size.width = this._getContainerFitWidth();
      }
  
      退货尺寸；
    };
  
    proto._getContainerFitWidth = function() {
      变量未使用Cols = 0;
      // 计算未使用的列
      var i = this.cols;
      当我 ） {
        如果 ( this.colYs[i] !== 0 ) {
          休息;
        }
        未使用的Cols++；
      }
      // 使容器适合已使用的列
      返回 ( this.cols - 未使用的Cols ) * this.columnWidth - this.gutter;
    };
  
    proto.needsResizeLayout = 函数（）{
      var previousWidth = this.containerWidth;
      this.getContainerWidth();
      返回 previousWidth != this.containerWidth;
    };
  
    返回砌体；
  
  }));
  