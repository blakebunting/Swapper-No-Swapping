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

results=[] #array of arrays, used to tell count

# list of 'common words to not include in word count
commonWords = [' ','and','us','at','spaces','','by','we','admin','an','to','the','this','was','a','with','in','for','that','of','is','may','on','ways','like','our','as','about','every']

#go through every element on website
for a in soup.findAll():

    #make every element into an array of words 
    a = a.get_text().strip().lower().split(" ")

    #for every word in each element
    for word in a:
        word = re.sub('[\W_]+', '', word) 
        results.append(word)  




# Create an empty dictionary 
d = dict() 
  
# Iterate over each word in line 
for word in results: 
    # Check if the word is already in dictionary 
    if word in d: 
        # Increment count of word by 1 
        d[word] = d[word] + 1
    else: 
        # Add the word to dictionary with count 1 
        d[word] = 1

i=0
end=dict()

#loop 5 times to get 5 most common words
while i!=10:
    ci=0
    #get current most popular word
    maximum = 0
    max_key = None
    for k in d:
        if d[k] > maximum:
            maximum = d[k]
            max_key = k


    #loop through commonWords
    for a in commonWords:
        #if its a common word get it out of the list
        if max_key == a:
            d.pop(max_key)
            ci+=1

    #if its not add it to new list and take out of old list
    if ci==0:
        end[maximum] = max_key
        d.pop(max_key)
        i+=1
        

print(end)

#store data in csv file to easily manipulate
#df = pd.DataFrame({'Paragraph tags':results}) 
#df.to_csv('results.csv', index=False, encoding='utf-8')

