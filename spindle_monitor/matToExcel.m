path='F:\spindle_monitor';
cd(path);
load('shiqianrong_test.mat');
AA={'Name1'};
for i=1:length(x_change_filter(1,:))
    A=x_change_filter(1,i);
    AA=[AA A];
end
AA=AA';
xlswrite('test.xls',AA,'sheet1','A')
    