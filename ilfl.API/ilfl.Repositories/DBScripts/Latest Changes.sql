USE [ilfl]
GO
SET IDENTITY_INSERT [dbo].[IFSSSection] ON
INSERT INTO [dbo].[IFSSSection]
           ([IFSSId],
			[IFSSParent]
           ,[IFSSName]
           ,[IFSSPath]
           ,[IFSSIsPageEditable])
     VALUES
           (27,
			9,
           'Shares Transferred to IEPF',
           'shares-Transferred-to-iepf',
           0)
GO
GO

INSERT INTO [dbo].[IFSSSection]
           ([IFSSId]
		   ,[IFSSParent]
           ,[IFSSName]
           ,[IFSSPath]
           ,[IFSSIsPageEditable])
     VALUES
           (28,
			9,
           'Shares to be Transferred to IEPF',
           'shares-to-be-Transferred-to-iepf',
           0)

SET IDENTITY_INSERT [dbo].[IFSSSection] OFF
GO


