#when testing on your computer make sure u have pip installed and install selenium, bs4 through there
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
import re

#this is also dependant on where your chrome webdriver is, find it with command F
driver = webdriver.Chrome("/Users/ellio/Downloads/chromedriver")

#navigate to certain website
driver.get('http://www.ibuku.com/')

#use this to get data from site
content = driver.page_source
soup = BeautifulSoup(content, features="html.parser")
results=[]
theCount=0

#now I'm just messing around to see what I can do with the data
for a in soup.findAll():
    a = a.get_text().split()
    for word in a:
        if word == 'the':
            theCount+=1
            results.append(word)

print(theCount)

#store data in csv file to easily manipulate
df = pd.DataFrame({'Paragraph tags':results}) 
df.to_csv('results.csv', index=False, encoding='utf-8')
