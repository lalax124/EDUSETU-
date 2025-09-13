import React from 'react';

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
  >
    <circle cx="12" cy="7" r="5" fill="#262d5a"/>
    <path d="M12 14c-7 0-7 5-7 5h14s0-5-7-5z" fill="#262d5a"/>
  </svg>
);

const chatGroups = [
  { name: 'Physics Group', icon: '👥' },
  { name: 'Chemistry Groups', icon: '👥' },
  { name: 'Biology Groups', icon: '👥' },
];

const onlineUsers = [
  { id: 1, name: 'User1', avatar: <ProfileIcon /> },
  { id: 2, name: 'User2', avatar: <ProfileIcon /> },
  { id: 3, name: 'User3', avatar: <ProfileIcon /> },
];

const Chat = () => (
  <div
    style={{
      fontFamily: 'sans-serif',
      background: '#dcdef3',
      minHeight: '100vh',
      color: '#262d5a',
      width: '100vw',
      boxSizing: 'border-box',
      paddingTop: '38px',
    }}
  >
    {/* Header row: Chat heading + Search Bar */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95vw',
        marginLeft: '3vw',
        marginBottom: '7px',
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '2.4rem',
          marginLeft: '3px',
        }}
      >
        Chat
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '1px 1px 6px rgba(44,44,44,0.09)',
        padding: '0 24px',
        minWidth: '314px',
        maxWidth: '314px',
        height: '46px',
      }}>
        <span style={{ fontSize: '1.3rem', color: '#9aa5c8', marginRight: '9px' }}>🔍</span>
        <input
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '1.1rem',
            background: 'transparent',
            width: '100%',
          }}
          placeholder="Search..."
        />
      </div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '95vw',
        marginLeft: '3vw',
        alignItems: 'flex-start',
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: '270px',
          minWidth: '270px',
          display: 'flex',
          flexDirection: 'column',
          gap: '38px',
        }}
      >
        <div style={{ minHeight: '15px' }} />
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: '12px' }}>
            Online
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {onlineUsers.map(user => (
              <div
                key={user.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#bcc3db',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                }}>
                  {user.avatar}
                </div>
                <div style={{
                  height: '12px',
                  width: '110px',
                  background: '#262d5a',
                  borderRadius: '7px'
                }} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.08rem', marginBottom: '12px' }}>
            Groups
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {chatGroups.map(group => (
              <div
                key={group.name}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
              >
                <span style={{
                  fontSize: '1.1rem',
                  background: '#bcc3db',
                  borderRadius: '50%',
                  width: '22px',
                  height: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {group.icon}
                </span>
                <span style={{ fontSize: '1rem' }}>{group.name}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <span style={{
                fontSize: '1.1rem',
                background: '#bcc3db',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>+</span>
              <span style={{ fontSize: '1rem' }}>Create Group</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <span style={{
                fontSize: '1.1rem',
                background: '#edf1fa',
                borderRadius: '50%',
                width: '22px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>💬</span>
              <span style={{ fontSize: '1rem' }}>Broadcast Message</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Chat Column */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '42px',
          marginTop: '20px',
        }}
      >
        {/* Tab Bar (Student's/Teacher's) centered below search/header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginBottom: '38px',
            marginTop: '-16px',
          }}
        >
          <div style={{
            display: 'flex',
            borderRadius: '7px',
            overflow: 'hidden',
            boxShadow: '0 1px 4px rgba(36,36,36,0.09)',
            margin: "0px 0px 0px -280px",
          }}>
            <button
              style={{
                background: '#262d5a',
                color: 'white',
                border: 'none',
                outline: 'none',
                fontSize: '1.35rem',
                padding: '16px 78px',
                cursor: 'pointer'
              }}
            >Student's</button>
            <button
              style={{
                background: '#eaeaf3',
                color: '#262d5a',
                border: 'none',
                outline: 'none',
                fontSize: '1.35rem',
                padding: '16px 73px',
                cursor: 'pointer'
              }}
            >Teacher's</button>
          </div>
        </div>
        {/* Chat Messages */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          minHeight: '190px',
          marginBottom: '38px',
          width: '92%',
          maxWidth: '890px',
        }}>
          {/* Message 1 (user) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
            width: '100%',
          }}>
            <div style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
              background: '#bcc3db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.7rem'
            }}>
              <ProfileIcon />
            </div>
            <div style={{
              background: '#262d5a',
              color: 'white',
              borderRadius: '15px',
              padding: '20px 75px',
              minWidth: '320px',
              width: '42%',
              fontSize: '1.17rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                height: '11px',
                width: '210px',
                background: '#ceb990',
                borderRadius: '7px'
              }} />
            </div>
          </div>
          {/* Message 2 (user) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '22px',
            width: '100%',
          }}>
            <div style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
              background: '#bcc3db',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.7rem'
            }}>
              <ProfileIcon />
            </div>
            <div style={{
              background: '#eef0fa',
              color: '#262d5a',
              borderRadius: '15px',
              padding: '20px 75px',
              minWidth: '320px',
              width: '42%',
              fontSize: '1.17rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                height: '11px',
                width: '210px',
                background: '#ceb990',
                borderRadius: '7px'
              }} />
            </div>
          </div>
          {/* Bot PDF Message - right aligned, matches vertical line of sidebar's 'Online' section */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '100%',
            marginTop: '38px',
          }}>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '17px 34px',
              minWidth: '320px',
              width: '42%',
              fontSize: '1.17rem',
              display: 'flex',
              alignItems: 'center',
              gap: '17px',
              border: '1px solid #e2e3ed',
              boxShadow: '0 1px 6px rgba(44,44,44,0.07)',
            }}>
              <span style={{
                background: '#bcc3db',
                borderRadius: '7px',
                padding: '7px 14px',
                fontSize: '1.1rem',
                fontWeight: 500
              }}>📄 PDF</span>
              Physics_Assignment.pdf
            </div>
          </div>
        </div>
        {/* Chat Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            background: 'white',
            padding: '20px 30px',
            boxShadow: '1px 1px 8px rgba(44,44,44,0.09)',
            marginTop: '-10px',
            width: '92%',
            maxWidth: '890px',
          }}
        >
          {/* Emoji at the left */}
          <span
            style={{
              fontSize: '1.39rem',
              marginRight: '17px'
            }}
          >😊</span>
          <input
            type="text"
            placeholder="Type a message....."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.13rem',
              background: 'transparent',
              textAlign: 'left', // left-aligns the placeholder
            }}
          />
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.45rem',
              color: '#262d5a',
              marginLeft: '18px',
              cursor: 'pointer'
            }}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Chat;
