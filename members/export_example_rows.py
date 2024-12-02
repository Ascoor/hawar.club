import pandas as pd

# تحميل البيانات من ملف CSV
df = pd.read_csv('members.csv')

# استخراج أول 5 أسطر مع أسماء الأعمدة
sample_data = df.head(5)

# حفظ العينة في ملف CSV جديد
sample_data.to_csv('sample_data.csv', index=False)

print("تم حفظ العينة في ملف sample_data.csv")
