package com.casco.operationportal.generator;

import com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;
import com.baomidou.mybatisplus.core.toolkit.StringPool;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.po.TableInfo;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * @program xiot_platform
 * @description:
 * @author: fredric
 * @create: 2020/03/03 13:41
 */

public class CodeGenerator {

	public static String parent = "com.casco";
	public static String moduleName = "operationportal";

	public static String dbUrl = "jdbc:mysql://172.30.81.114:3306/casco_zhgs?useUnicode=true&useSSL=false&characterEncoding=utf8";
	public static String dbUserName = "root";
	public static String dbPassword = "123456";

	//生成代码的controller 的 公共父类
//	public static String superControllerClass = "com.yeexun.xiot.base.controller.BaseController";
	public static String superControllerClass = null;

	//要生成的表，多个英文逗号分割,如果想生成所有的表则将该值设置为""
	public static String tables = "";


	public static void main(String[] args) {
		// 代码生成器
		AutoGenerator mpg = new AutoGenerator();

		// 全局配置
		GlobalConfig gc = new GlobalConfig();

		String projectPath = System.getProperty("user.dir");//获取当前项目的路径
		//设置输出路径
		gc.setOutputDir(projectPath + "/generator");

		gc.setAuthor("yeexun");
		gc.setOpen(false);
		gc.setFileOverride(false);// 是否覆盖同名文件
		gc.setActiveRecord(true);// 不需要ActiveRecord特性的请改为false
		// gc.setSwagger2(true); 实体属性 Swagger2 注解
		/* 自定义文件命名，注意 %s 会自动填充表实体属性！ */
		//gc.setMapperName("%sDao");
		// gc.setXmlName("%sDao");
		gc.setServiceName("%sService");
		gc.setServiceImplName("%sServiceImpl");
		// gc.setControllerName("%sAction");
		mpg.setGlobalConfig(gc);

		// 包配置
		PackageConfig pc = new PackageConfig();
		pc.setParent(parent);
//        pc.setModuleName(scanner("模块名"));
		pc.setModuleName(moduleName);

		// 数据源配置
		DataSourceConfig dsc = new DataSourceConfig();
		dsc.setUrl(dbUrl);
		// dsc.setSchemaName("public");
		dsc.setDriverName("com.mysql.jdbc.Driver");
		dsc.setUsername(dbUserName);
		dsc.setPassword(dbPassword);
		mpg.setDataSource(dsc);

		mpg.setPackageInfo(pc);

		// 自定义配置
		InjectionConfig cfg = new InjectionConfig() {
			@Override
			public void initMap() {
				// to do nothing
			}
		};

		// 如果模板引擎是 freemarker
		String templatePath = "/templates/mapper.xml.ftl";
		// 如果模板引擎是 velocity
		// String templatePath = "/templates/mapper.xml.vm";

		// 自定义输出配置
		List<FileOutConfig> focList = new ArrayList<>();
		// 自定义配置会被优先输出
		focList.add(new FileOutConfig(templatePath) {
			@Override
			public String outputFile(TableInfo tableInfo) {
				// 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
				return projectPath +
						"/xiot_common/xiot_com_dbgen/generator/xml/" +
						tableInfo.getEntityName() +
						"Mapper" + StringPool.DOT_XML;
			}
		});
        /*
        cfg.setFileCreate(new IFileCreate() {
            @Override
            public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {
                // 判断自定义文件夹是否需要创建
                checkDir("调用默认方法创建的目录");
                return false;
            }
        });
        */
		cfg.setFileOutConfigList(focList);
		mpg.setCfg(cfg);

		// 配置模板
		TemplateConfig templateConfig = new TemplateConfig();

		// 配置自定义输出模板
		//指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
		// templateConfig.setEntity("templates/entity2.java");
		// templateConfig.setService();
		// templateConfig.setController();

		templateConfig.setXml(null);
		mpg.setTemplate(templateConfig);

		// 策略配置
		StrategyConfig strategy = new StrategyConfig();
		strategy.setNaming(NamingStrategy.underline_to_camel);
		strategy.setColumnNaming(NamingStrategy.underline_to_camel);
//        strategy.setSuperEntityClass("com.baomidou.ant.common.BaseEntity");
		//使用lombok
		strategy.setEntityLombokModel(true);
		//使用 @RestController 注解
		strategy.setRestControllerStyle(true);
		// 公共父类
		strategy.setSuperControllerClass(superControllerClass);
		// 写于父类中的公共字段
//        strategy.setSuperEntityColumns("id");
//        strategy.setInclude(scanner("表名，多个英文逗号分割").split(","));
		if(!tables.isEmpty()){
			strategy.setInclude(tables);
		}
//        strategy.setExclude(""); // 排除生成的表
//        strategy.setControllerMappingHyphenStyle(true);
//        strategy.setTablePrefix(pc.getModuleName() + "_");
		mpg.setStrategy(strategy);
		mpg.setTemplateEngine(new FreemarkerTemplateEngine());
		mpg.execute();
	}

	/**
	 * <p>
	 * 读取控制台内容
	 * </p>
	 */
	public static String scanner(String tip) {
		Scanner scanner = new Scanner(System.in);
		StringBuilder help = new StringBuilder();
		help.append("请输入" + tip + "：");
		System.out.println(help.toString());
		if (scanner.hasNext()) {
			String ipt = scanner.next();
			if (StringUtils.isNotEmpty(ipt)) {
				return ipt;
			}
		}
		throw new MybatisPlusException("请输入正确的" + tip + "！");
	}
}
