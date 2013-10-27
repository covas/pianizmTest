echo off

rem keytool -genkey -alias <alias> -keystore <filename> -keypass <keypass> -dname <dname> -storepass <storepass> -validity <days>

keytool -genkey -alias myAlias100 -keystore myCert100 -keypass myKeyPass100 -dname "CN=FileApplet100" -storepass myStorePass100 -validity 1825


rem jarsigner -keystore <keystore_file> -keypass <keypass> -storepass <storepass> <jar_file> <alias>

jarsigner -keystore myCert100 -keypass myKeyPass100 -storepass myStorePass100 pianizm.jar myAlias100

jarsigner -verify pianizm.jar
