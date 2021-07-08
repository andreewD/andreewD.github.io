import wget
import discord
import os
import PyPDF2
import pandas as pd
import re

client = discord.Client()

# def func(entry,df1,PATTERN):
#     with open(entry,"r") as f:
#         a_txt=f.readlines()
#     whole_txt="".join(a_txt)
#     matches=re.findall(PATTERN,whole_txt,flags=re.MULTILINE)
#     expenses=[[m[1],m[0]] for m in matches]
#     df=pd.DataFrame(data=expenses)
#     del df[1]
#     df=df.T
#     del df[1]
#     del df[3]
#     del df[5]
#     df.columns=['Nombres','Codigo','Facultad','Especialidad']
#     df1=pd.concat([df1,df], ignore_index=True)
#     return df1

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('&'):
        
        if(message.content=='&angel'):
            # PATTERN = r'(:)(.*)'
            # column_names=['Nombres','Codigo','Facultad','Especialidad']
            # df1=pd.DataFrame(columns=column_names)
            # ciclo='20211'
            # codigo='20171385I'
            # url='https://www.academico.uni.edu.pe/alumno/mis-notas-pdf/'+ciclo+'/'+codigo
            # filename=wget.download(url)
            # pdffileobj=open('doc.pdf','rb')
            # pdfreader=PyPDF2.PdfFileReader(pdffileobj)
            # pageobj=pdfreader.getPage(1)
            # text=pageobj.extractText()
            # df1=func(text,df1,PATTERN)
            # await message.channel.send(df1)
            await message.channel.send(file=discord.File('doc.pdf'))


            await message.channel.send(file=discord.File('doc.pdf'))
            os.remove("doc.pdf")
        
        if(message.content=='&edwin'):
            ciclo='20211'
            codigo='20180426F'
            url='https://www.academico.uni.edu.pe/alumno/mis-notas-pdf/'+ciclo+'/'+codigo
            filename=wget.download(url)
            await message.channel.send(file=discord.File('doc.pdf'))
            os.remove("doc.pdf")

        else:
            ciclo=message.content[1:6]
            codigo=message.content[7:]
            if (codigo=='20182711J'):
                await message.channel.send("Habil te crees ctm")
            else :
                url='https://www.academico.uni.edu.pe/alumno/mis-notas-pdf/'+ciclo+'/'+codigo
                # print(url)
                filename=wget.download(url)
                await message.channel.send(file=discord.File('doc.pdf'))
                os.remove("doc.pdf")
        
        #await message.channel.send(url)
    


        
client.run('ODYyNzcyMTEwNTMwMTgzMTY5.YOdNJA.QdEPLQZ_e-2_R7TVkmaYd_fzVEc')
