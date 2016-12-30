delimiter $$

create trigger dljd_hire before insert on `诚招英才` for each row begin   
    if (new.工作城市 is NULL)
    then  
    set new.工作城市 = '大连';
    end if;   
    if (new.招聘公司 is NULL)
    then
    set new.招聘公司 = '大连峻达医药有限公司';
    end if;
    if (new.招聘人数 is NULL)
    then
    set new.招聘人数 = '招聘1人';
    end if;
    if (new.发布时间 is NULL)
    then
    set new.发布时间 = CURRENT_TIMESTAMP;
    end if;
    if (new.联系方式 is NULL)
    then
    set new.联系方式 = '邮箱：dljdyyyxgs@163.com';
    end if;
    if (new.工作地点 is NULL)
    then
    set new.工作地点 = '沙河口区';
    end if;


end$$
