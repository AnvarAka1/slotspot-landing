import React from 'react'
import { createStyles } from '@mantine/core'
import { ApplicationReqDto } from '@src/modules/business/dto'
import Main from '@src/modules/business/components/Business/Sections/Main'
import ForBusinessSection from '@src/modules/business/components/Business/Sections/ForBusinessSection'
import PeopleSection from '@src/modules/business/components/Business/Sections/PeopleSection'
import ForClientSection from '@src/modules/business/components/Business/Sections/ForClientSection'
import LeaveRequest from '@src/modules/business/components/Business/Sections/LeaveRequest'
import { useDisclosure } from '@mantine/hooks'
import RequestModal from '@src/modules/business/components/Business/RequestModal'

type Props = {
  onApplicationSend: (value: ApplicationReqDto) => Promise<void>
}

const useStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '60px',
    marginBottom: '70px'
  },
  forBusiness: {},
  forBusinessLeft: {
    marginTop: '130px',
    position: 'relative',
    zIndex: 1,
    [theme.fn.smallerThan('md')]: {
      paddingLeft: '12px',
      paddingRight: '12px',
      textAlign: 'center'
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: '24px'
    }
  },
  ipad: {
    position: 'absolute',
    right: '-250px',
    top: '-100px',
    width: '1100px',
    [theme.fn.smallerThan('lg')]: {
      top: '-50px',
      right: '-180px',
      width: '800px'
    },
    [theme.fn.smallerThan('md')]: {
      top: '100px',
      width: '700px'
    },
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },
  ipadMobile: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      display: 'inline-block',
      width: '100%',
      textAlign: 'center'
    }
  },
  forClientsContainer: {
    marginTop: '300px',
    marginBottom: '370px',
    paddingTop: '200px',
    [theme.fn.smallerThan('lg')]: {
      marginTop: '100px',
      marginBottom: '300px',
      paddingTop: '100px'
    },
    [theme.fn.smallerThan('md')]: {
      marginTop: '50px',
      marginBottom: '300px',
      paddingTop: '50px'
    },
    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '50px',
      paddingTop: '0'
    }
  },
  forClients: {},
  iphone: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '435px',
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },
  iphoneMobile: {
    display: 'none',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '24px',
      display: 'inline-block',
      width: '320px',
      textAlign: 'center'
    }
  },
  forClientsRight: {
    marginTop: '160px',
    [theme.fn.smallerThan('sm')]: {
      marginTop: '24px',
      textAlign: 'center'
    }
  },
  leaveRequest: {
    marginTop: '150px',
    marginBottom: '150px',
    textAlign: 'center',
    padding: '16px'
  },
  leaveRequestImage: {
    width: '190px',
    [theme.fn.smallerThan('lg')]: {
      width: '150px'
    },
    [theme.fn.smallerThan('md')]: {
      width: '120px'
    },
    [theme.fn.smallerThan('sm')]: {
      width: '60px'
    }
  }
}))

function Business({ onApplicationSend }: Props) {
  const [opened, { open: handleOpen, close: handleClose }] = useDisclosure(false)

  return (
    <>
      <RequestModal opened={opened} onClose={handleClose} onSubmit={onApplicationSend}/>
      <Main onApplicationOpen={handleOpen}/>
      <PeopleSection/>
      <ForBusinessSection/>
      <ForClientSection/>
      <LeaveRequest onApplicationOpen={handleOpen}/>
    </>
  )
}

export default Business
